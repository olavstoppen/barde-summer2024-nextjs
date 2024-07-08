import { machine } from '@/lib/types';
import Breadcrumbs from '@/app/ui/components/breadcrumb';
import { PlusIcon } from '@heroicons/react/16/solid';
import { promises as fs } from 'fs';
import Link from 'next/link';
import { Key } from 'react';

export default async function Page({ params }: { params: { id: number } }) {
    const id = params.id;

    const file = await fs.readFile(process.cwd() + '/app/lib/data.json', 'utf8');
    const data = JSON.parse(file);

    const machine = data.machine;

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Inventory', href: '/inventory/' },
                    {
                        label: `Machine ${id}`,
                        href: `/inventory/${id}`,
                        active: true,
                    },
                ]}
            />
            <div className="max-w-7xl">
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Maskininformasjon</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Informasjon om maskinen</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">ID</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {machine[id - 1].id}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Navn</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {machine[id - 1].name}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Type</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {machine[id - 1].type}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Status</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {machine[id - 1].status}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Historisk data</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <ul
                                    className="bg-white overflow-hidden sm:rounded-md divide-y divide-gray-200 h-32 sm:h-auto sm:p-0"
                                    style={{
                                        maxHeight: '400px',
                                        overflow: 'auto',
                                    }}
                                >
                                    {machine[id - 1].historic_data.map((item: string, index: Key) => (
                                        <li key={index} className="py-4">
                                            <div className="flex items-left justify-between">
                                                <p className="text-sm font-medium text-gray-900">{item[0]}</p>
                                            </div>
                                            <div className="flex items-left justify-between mt-3">
                                                <p className="text-sm font-small text-gray-900">{item[1]}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
                <div>
                    <Link
                        href={`/inventory/`}
                        className="flex max-w-24 h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        <span className="hidden md:block">Tilbake</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
