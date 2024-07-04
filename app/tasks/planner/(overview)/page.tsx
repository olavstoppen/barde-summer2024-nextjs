import Kanban from '../components/kanban';
import path from 'path';
import { promises } from 'fs';
import DatePicker from '../components/datePicker';

export async function getData() {
    // Fetch data from the database
    const fileName = path.join(process.cwd(), 'app/lib', 'data.json');
    const data = await promises.readFile(fileName, 'utf8');
    return JSON.parse(data);
}

export default async function Page() {
    const data = await getData();
    //sending data to the Kanban component
    return (
        <main>
            <div className="w-[504px] text-stone-900 text-4xl font-normal font-['Space Mono'] leading-[44px]">
                Her er alle dine vedlikeholdsoppgaver
            </div>
            <Kanban />
        </main>
    );
}
