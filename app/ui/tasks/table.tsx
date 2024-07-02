import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { promises as fs } from 'fs';
import { task } from '@/app/lib/types';
import dayjs, { Dayjs } from 'dayjs';

export default async function InventoryTable({
    date,
    query,
    currentPage,
}: {
    date: Dayjs | null | undefined;
    query: string;
    currentPage: number;
}) {
    const file = await fs.readFile(
        process.cwd() + '/app/lib/data.json',
        'utf8',
    );
    const data = JSON.parse(file);

    const tasks = data.task;

    const filteredTasks = tasks.filter((index: task) =>
        index.name.toString().includes(query),
    );

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {tasks?.map(
                            (tasks: task) =>
                                tasks.name.toString().includes(query) && (
                                    <div
                                        key={tasks.id}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex items-center justify-between border-b pb-4">
                                            <div>
                                                <div className="mb-2 flex items-center">
                                                    <p>{tasks.due_date}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between border-b pb-4">
                                            <div>
                                                <div className="mb-2 flex items-center">
                                                    <p>{tasks.id}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center justify-between pt-4">
                                            <div>
                                                <p className="text-xl font-medium">
                                                    {tasks.name}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center justify-between pt-4">
                                            <div>
                                                <p className="text-xl font-medium">
                                                    {tasks.type}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center justify-between pt-4">
                                            <div>
                                                <p className="text-xl font-medium">
                                                    {tasks.status}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center justify-between pt-4">
                                            <div>
                                                <p className="text-xl font-medium">
                                                    {tasks.date}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ),
                        )}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-4 py-5 font-medium sm:pl-6"
                                >
                                    Oppgave avsluttet
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-5 font-medium sm:pl-6"
                                >
                                    Oppgave ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-5 font-medium"
                                >
                                    Type Maskin
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-5 font-medium"
                                >
                                    Type
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-5 font-medium"
                                >
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {tasks.map(
                                (tasks: task) =>
                                    tasks.name.includes(query) && (
                                        <tr
                                            key={tasks.id}
                                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                        >
                                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                                <div className="flex items-center gap-3">
                                                    <p>{tasks.due_date}</p>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                                <div className="flex items-center gap-3">
                                                    <p>{tasks.id}</p>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3">
                                                {tasks.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3">
                                                {tasks.type}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3">
                                                {tasks.status}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3">
                                                <div className="flex justify-end gap-3">
                                                    <Link
                                                        href={`/tasks/${tasks.id}`}
                                                        className="flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors hover:bg-grey-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600"
                                                    >
                                                        <ArrowRightIcon className="h-5 md:ml-4" />
                                                        <span className="hidden md:block ml-3">
                                                            Se info
                                                        </span>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ),
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
