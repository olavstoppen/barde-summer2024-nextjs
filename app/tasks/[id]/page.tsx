import Breadcrumbs from '@/app/ui/components/breadcrumb';
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { promises as fs } from 'fs';
import Link from 'next/link';
import React from 'react';
//import image from 'public/bil.png';
// <img src={image} />

export default async function Page({ params }: { params: { id: number } }) {
    const id = params.id;

    const file = await fs.readFile(process.cwd() + '/app/lib/data.json', 'utf8');
    const data = JSON.parse(file);

    const tasks = data.task;

    return (
        <main>
            <div className="flex justify-between ">
                <Link
                    href={`/tasks`}
                    className="flex max-w-64 h-10 items-center rounded-lg text-lg font-medium text-black"
                >
                    <ArrowLeftIcon className="w-4 h-4 mr-4" />
                    <span className="">Tilbake</span>
                </Link>

                <div className="inline-flex rounded-sm px-6" role="group">
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-outline rounded-s-lg"
                    >
                        Mottatt
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-r border-t border-b border-outline"
                    >
                        Planlagt
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-outline"
                    >
                        Aktiv
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-outline rounded-e-lg"
                    >
                        Ferdig
                    </button>
                </div>
            </div>

            <div className="max-w-7xl">
                <div className="px-6 sm:px-0">
                    <h3 className="text-base pt-6 font-semibold text-[34px] leading-7 text-gray-900">
                        Vedlikeholdsoppgave:
                    </h3>
                    <h3 className="text-base font-semibold pt-6 leading-7 text-[28px] text-pri">
                        {tasks[id - 1].name}
                    </h3>
                    <div className="container"></div>
                </div>

                <table className="hidden mb-6 mt-6 max-w-full md:table">
                    <thead className="rounded-lg border-b border-surf space-y-[5px] text-left pl-4 text-md font-normal pb-6 bg-pri-cont">
                        <tr>
                            <th className="px-4 py-5 font-bold sm:pl-6 rounded-l-lg text-md">ID</th>
                            <th className="px-4 py-5 font-bold sm:pl-6 text-md">Maskin</th>
                            <th className="px-4 py-5 font-bold sm:pl-6  text-md">Dato</th>
                            <th className="px-4 py-5 font-bold sm:pl-6  text-md">Type</th>
                            <th className="px-4 py-5 font-bold sm:pl-6 rounded-r-lg text-md over">Beskrivelse</th>
                        </tr>
                    </thead>
                    <tbody className="w-full max-w-96 bg-surf-cont border border-surf border-2 text-md">
                        <tr>
                            <td className="whitespace-nowrap py-6 text-left pl-6 rounded-l-lg">{tasks[id - 1].id}</td>
                            <td className="whitespace-nowrap  py-6 text-left pl-6"> {tasks[id - 1].machine}</td>
                            <td className="whitespace-nowrap py-6 text-left pl-6"> {tasks[id - 1].start_date}</td>
                            <td className="whitespace-nowrap py-6 text-left pl-6"> {tasks[id - 1].type}</td>
                            <td className="py-6 text-left pl-6 overflow-y-auto rounded-r-lg">
                                {tasks[id - 1].description}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-surf-cont-high py-2 mt-2 px-4 py-3 h-[750px] w-full">
                        <p className="text-lg p-3 pb-5">Historikk</p>
                        <div className="flex flex-col space-y-2 overflow-auto h-[700px] overflow-y-auto overflow-x-hidden">
                            {tasks[id - 1].historic_data.map((item: string) => (
                                <div className="flex space-x-4 pb-4 pl-2">
                                    <CheckCircleIcon className="w-5 h-5" />
                                    <div className="flex flex-col">
                                        <p className="text-sm text-tert"> {item[2]} </p>
                                        <p className="text-md">
                                            {item[0]}: {item[1]}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl bg-surf-cont-high py-2 mt-2 px-4 py-3 h-[750px] w-full">
                        <p className="text-lg p-3">Beskrivelse av det som er behandlet</p>
                        <div className="m-3 overflow-auto h-[700px] overflow-y-auto overflow-x-hidden">
                            <p> {tasks[id - 1].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

/*


<Breadcrumbs
                breadcrumbs={[
                    { label: 'Inventory', href: '/tasks/' },
                    {
                        label: `Tasks ${id}`,
                        href: `/tasks/${id}`,
                        active: true,
                    },
                ]}
            />


*/
