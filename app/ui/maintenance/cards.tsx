import { task } from '@/lib/types';
import { AdjustmentsHorizontalIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import { promises as fs } from 'fs';
import Link from 'next/link';
import { Button } from '../components/table/button';

export async function Tasks({ title, value }: { title: string; value: number | string }) {
    const file = await fs.readFile(process.cwd() + '/lib/data.json', 'utf8');
    const data = JSON.parse(file);
    const tasks = data.task;

    const plannedtasks = tasks.filter((item: task) => item.status === 'Planned');
    const unplannedtasks = tasks.filter((item: task) => item.status === 'Unplanned');

    return (
        <div className="rounded-xl bg-surf-cont-low p-4 shadow-sm h-[850px] w-full">
            <div className="relative flex p-2">
                <h3 className="text-lg font-medium">{title}</h3>
                <div className="absolute top-1 right-6">
                    <Linkbox path="tasks/planner" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-surf-cont-high py-2 mt-2 px-4 py-3 h-[750px] w-full">
                    <p className="pb-2">Ubehandlet</p>
                    <div className="overflow-auto h-[700px] overflow-y-auto overflow-x-hidden">
                        {unplannedtasks.map((item: task) => (
                            <>
                                <KanbanTask item={item} />
                            </>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl bg-surf-cont-high py-2 mt-2 px-4 py-3 h-[750px] w-full">
                    <p className="pb-2">Planlagt</p>
                    <div className="overflow-auto h-[700px] overflow-y-auto overflow-x-hidden">
                        {plannedtasks.map((item: task) => (
                            <>
                                <KanbanTask item={item} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Week({ title }: { title: string }) {
    return (
        <div className="rounded-xl p-4 h-[850px] shadow-sm h-96 w-max-lg">
            <div className={`flex flex-col rounded-xl mt-2 px-4 py-3 h-72 h-[750px]`}>
                <Button variant="outline" className=" pr-4 mr-3 mb-2 h-[50px] bg-surf-cont">
                    <Link key={'/tasks/planner'} href={'/maintenance/planner'} className="w-full">
                        Oppgaver
                    </Link>
                </Button>

                <Button variant="outline" className="pr-4 mr-3 h-[50px] bg-surf-cont">
                    <Link key={'/tasks/history'} href={'/maintenance/history'} className="w-full">
                        Historie
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export function MessageCard() {
    return (
        <div className="relative rounded-xl bg-pri-cont p-4 shadow-sm h-52 w-full">
            <div className="flex p-2">
                <h3 className="ml-2 pt-5 text-2xl font-medium">Du har ny maskin til vedlikehold! </h3>
            </div>
            <div className="absolute bottom-5 right-6">
                <Linkbox path="tasks/planner" />
            </div>
        </div>
    );
}

export function Linkbox({ path }: { path: string }) {
    return (
        <Link key={path} href={'/' + path}>
            <ArrowRightIcon className="w-8 h-8" color="#1C1B1B" />
        </Link>
    );
}

export function KanbanTask({ item }: { item: task }) {
    return (
        <div
            style={{
                padding: 8,
                margin: '0 0 0px 0',
                minHeight: '50px',
                color: 'white',
            }}
        >
            <div className="w-full p-4 bg-surf-cont rounded-xl shadow flex-col justify-start items-start gap-2.5 inline-flex scale-on-hover">
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-zinc-700 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                        {item.id}
                    </div>
                    <div className="w-[69px] h-[15px] text-right text-zinc-700 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                        {item.start_date}
                    </div>
                </div>
                <div className="self-stretch text-stone-900 text-sm font-bold font-['Roboto'] leading-tight tracking-tight">
                    {item.name}
                </div>
                <div className="self-stretch text-stone-900 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                    {item.status}
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-zinc-700 border-pri border-2 border p-1 rounded-sm text-sm font-medium font-['Roboto'] leading-none tracking-wide">
                        {item.type}
                    </div>

                    <Linkbox path={'tasks/' + item.id} />
                </div>
            </div>
        </div>
    );
}
