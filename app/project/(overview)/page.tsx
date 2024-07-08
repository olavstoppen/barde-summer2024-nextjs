import { task } from '@/lib/types';
import { DataTable } from '@/app/ui/maintenance/tasks-data-table';
import { promises as fs } from 'fs';
import { columns } from './columns';

export async function getTasks(): Promise<task[]> {
    const file = await fs.readFile(process.cwd() + '/lib/data.json', 'utf8');
    const data = JSON.parse(file);

    return data.project;
}

export default async function Page() {
    const data = await getTasks();

    return (
        <section>
            <div className="max-w-7xl pt-4">
                <h1 className="text-3xl max-w-xl pb-6">Prosjekter</h1>
                <DataTable columns={columns} data={data} />
            </div>
        </section>
    );
}
