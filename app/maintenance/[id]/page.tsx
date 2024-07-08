import Breadcrumbs4 from '@/app/ui/components/breadcrumb';
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { promises as fs } from 'fs';

import React from 'react';
import Image from 'next/image';

export default async function Page({ params }: { params: { id: number } }) {
    const id = params.id;

    const file = await fs.readFile(process.cwd() + '/lib/data.json', 'utf8');
    const data = JSON.parse(file);

    const tasks = data.task;

    return (
        <main>
            <div>
                <Breadcrumbs4
                    componentslink="maintenance/history"
                    components="Historikk"
                    breadcrumb={tasks[id - 1].id}
                />
            </div>

            <div className="flex max-w-8xl justify-between ">
                <div>
                    <div className="px-6 sm:px-0 mt-5 mb-7">
                        <h3 className="text-base pt-6 font-medium text-[30px] leading-7 text-gray-900">
                            Vedlikeholdsoppgave:
                        </h3>
                        <h3 className="text-base font-medium pt-6 text-[28px] text-pri">{tasks[id - 1].name}</h3>
                    </div>
                </div>
                <div className="inline-flex max-h-[50px] rounded-sm" role="group">
                    <button
                        type="button"
                        className="px-4 py-2 max-h-sm text-sm font-medium text-gray-900 bg-white border border-outline rounded-s-lg hover:bg-pri-cont"
                    >
                        Mottatt
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 max-h-sm text-sm font-medium text-gray-900 bg-white border-r border-t border-b border-outline hover:bg-pri-cont"
                    >
                        Planlagt
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 max-h-sm text-sm font-medium text-gray-900 bg-white border-t border-b border-outline hover:bg-pri-cont"
                    >
                        Aktiv
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 max-h-sm text-sm font-medium text-gray-900 bg-white border border-outline rounded-e-lg hover:bg-pri-cont"
                    >
                        Ferdig
                    </button>
                </div>
            </div>

            <div className="max-w-8xl">
                <div className="flex justify-center items-center">
                    <Image src={'/bil.png'} alt={'alt'} width="1000" height="350" />
                </div>
                <table className="hidden mb-8 mt-10 max-w-full md:table">
                    <thead className="rounded-2xl space-y-[5px] text-left pl-4 text-md font-normal pb-6 bg-pri-cont">
                        <tr>
                            <th className="px-4 py-5 font-bold sm:pl-6 rounded-l-lg text-md">ID</th>
                            <th className="px-4 py-5 font-bold sm:pl-6 text-md">Maskin</th>
                            <th className="px-4 py-5 font-bold sm:pl-6  text-md">Dato</th>
                            <th className="px-4 py-5 font-bold sm:pl-6  text-md">Type</th>
                            <th className="px-4 py-5 font-bold sm:pl-6 rounded-r-lg text-md over">Beskrivelse</th>
                        </tr>
                    </thead>
                    <tbody className="rounded-lg bg-surf-cont border border-surf border-4 text-md">
                        <tr>
                            <td className="whitespace-nowrap py-6 m-3 text-left pl-6 rounded-l-2xl">
                                {tasks[id - 1].id}
                            </td>
                            <td className="whitespace-nowrap p-4 py-6 text-left pl-6"> {tasks[id - 1].machine}</td>
                            <td className="whitespace-nowrap p-4 py-6 text-left pl-6"> {tasks[id - 1].start_date}</td>
                            <td className="whitespace-nowrap p-4 py-6 text-left pl-6"> {tasks[id - 1].type}</td>
                            <td className="py-6 text-left p-4 overflow-y-auto rounded-r-2xl">
                                {tasks[id - 1].description}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="grid grid-cols-2 gap-10">
                    <div className="rounded-xl bg-surf-cont py-2 mt-2 px-4 py-3 h-[750px] w-full">
                        <p className="text-lg p-4 pb-5">Historikk</p>
                        <div className="flex flex-col mx-8 mt- space-y-2 overflow-auto h-[700px] overflow-y-auto overflow-x-hidden">
                            {tasks[id - 1].historic_data.map((item: string) => (
                                <div className="flex space-x-4 pb-4 pl-2">
                                    <CheckCircleIcon className="w-5 h-5 mt-3" />
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
                    <div className="rounded-xl bg-surf-cont py-2 mt-2 px-4 py-3 h-[280px] w-full">
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
