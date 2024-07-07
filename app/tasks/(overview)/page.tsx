
import { task } from '@/app/lib/types';
import { columns } from './columns'
import { promises as fs } from 'fs';
import { DataTable } from '@/app/ui/tasks/data-table';

async function getTasks(): Promise<task[]> {

  const file = await fs.readFile(process.cwd() + '/app/lib/data.json', 'utf8');
  const data = JSON.parse(file);

  return data.task;
}

export default async function Page() {
  const data = await getTasks()

  return (
    <section>
      <div className='container'>
        <h1 className='text-3xl'>Tasks</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  )
}