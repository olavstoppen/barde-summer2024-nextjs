import { columns } from './columns';
import { DataTable } from '@/app/ui/inventory/inventory-data-table';
import { task } from '@/lib/types';
import { promises as fs } from 'fs';

export async function getTasks(): Promise<task[]> {
    const file = await fs.readFile(process.cwd() + '/lib/data.json', 'utf8');
    const data = JSON.parse(file);

    return data.machine;
}

export default async function Page() {
    const data = await getTasks();

    return (
        <section>
            <div className="max-w-7xl pt-4">
                <h1 className="text-3xl max-w-xl pb-6">Maskiner</h1>
                <DataTable columns={columns} data={data} />
            </div>
        </section>
    );
}
