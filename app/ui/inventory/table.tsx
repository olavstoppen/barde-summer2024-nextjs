import { PlusIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

const machines = [
    { id: 1, name: 'Maskin 1', tyngde: '10kg' },
    { id: 2, name: 'Maskin 2', tyngde: '10kg' },
    { id: 3, name: 'Maskin 3', tyngde: '10kg' },
    { id: 4, name: 'Maskin 4', tyngde: '10kg' },
    { id: 5, name: 'Maskin 5', tyngde: '10kg' },
    { id: 6, name: 'Maskin 6', tyngde: '10kg' },
    { id: 7, name: 'Maskin 7', tyngde: '10kg' },
];

export default async function InventoryTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {machines?.map(machines => (
                            <div
                                key={machines.id}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{machines.id}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div>
                                        <p className="text-xl font-medium">
                                            {machines.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div>
                                        <p className="text-xl font-medium">
                                            {machines.tyngde}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-4 py-5 font-medium sm:pl-6"
                                >
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-5 font-medium"
                                >
                                    Navn
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-5 font-medium"
                                >
                                    Tyngde
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {machines?.map(machine => (
                                <tr
                                    key={machine.id}
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex items-center gap-3">
                                            <p>{machine.id}</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {machine.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {machine.tyngde}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        <div className="flex justify-end gap-3">
                                            <Link
                                                href={`/inventory/${machine.id}`}
                                                className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                            >
                                                <span className="hidden md:block">
                                                    Se info
                                                </span>{' '}
                                                <PlusIcon className="h-5 md:ml-4" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
