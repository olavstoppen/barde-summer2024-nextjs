import { task } from '@/lib/types';
import { columns } from './columns';
import { DataTable } from '@/app/ui/maintenance/tasks-data-table';
import { promises as fs } from 'fs';
import Breadcrumbs from '@/app/ui/components/breadcrumb';

export async function getTasks(): Promise<task[]> {
    const file = await fs.readFile(process.cwd() + '/lib/data.json', 'utf8');
    const data = JSON.parse(file);

    return data.task;
}

export default async function Page() {
    const data = await getTasks();

    return (
        <section>
            <div className="mb-4">
                <Breadcrumbs
                    componentslink="maintenance"
                    components="Vedlikehold"
                    breadcrumb="Historikk"
                    className="mb-4"
                />
            </div>
            <div className="max-w-7xl pt-4">
                <h1 className="text-3xl max-w-xl pb-6">Her er alle dine tidligere vedlikeholdsoppgaver</h1>
                <DataTable columns={columns} data={data} />
            </div>
        </section>
    );
}
