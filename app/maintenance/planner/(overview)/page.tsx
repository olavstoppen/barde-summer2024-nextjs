import Kanban from '../components/kanban';
import path from 'path';
import { promises } from 'fs';
import Breadcrumbs from '@/app/ui/components/breadcrumb';

export async function getData() {
    // Fetch data from the database
    const fileName = path.join(process.cwd(), '/lib', 'data.json');
    const data = await promises.readFile(fileName, 'utf8');
    return JSON.parse(data);
}

export default async function Page() {
    const data = await getData();
    //sending data to the Kanban component
    return (
        <main>
            <div className="mb-4">
                <Breadcrumbs componentslink="maintenance" components="Vedlikehold" breadcrumb="Vedlikeholdsoppgaver" />
            </div>
            <div className="w-[504px] mb-4 text-stone-900 text-4xl font-normal font-['Space Mono'] leading-[44px]">
                Her er alle dine vedlikeholdsoppgaver
            </div>
            <Kanban />
        </main>
    );
}
