import { task } from '@/app/lib/types';
import { useKambanState } from '@/hooks/use-kanban-state';
import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import { promises as fs } from 'fs';
import Link from 'next/link';

export default async function CardWrapper() {
    return (
        <>
            <Tasks title="Dine oppgaver" value={1} />
            <Week title="Din uke" />
        </>
    );
}

export async function Tasks({ title, value }: { title: string; value: number | string }) {
    const file = await fs.readFile(process.cwd() + '/app/lib/data.json', 'utf8');
    const data = JSON.parse(file);
    const tasks = data.task;

    const plannedtasks = tasks.filter((item: task) => item.status === 'Planned');
    const unplannedtasks = tasks.filter((item: task) => item.status === 'Unplanned');

    return (
        <div className="rounded-xl bg-gray-100 p-4 shadow-sm h-[850px] w-full">
            <div className="relative flex p-2">
                <h3 className="text-lg font-medium">{title}</h3>
                <div className="absolute top-1 right-6">
                    <Linkbox path="tasks/planner" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white py-2 mt-2 px-4 py-3 h-[750px] w-full">
                    <p className="pb-2">Ubehandlet</p>
                    <div className="overflow-auto h-[700px] overflow-y-auto overflow-x-hidden">
                        {unplannedtasks.map((item: task) => (
                            <>
                                <KanbanTask item={item} />
                            </>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl bg-white py-2 mt-2 px-4 py-3 h-[750px] w-full">
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
        <div className="rounded-xl bg-gray-100 p-4 h-[850px] shadow-sm h-96 w-full">
            <div className="relative flex p-2 ">
                <h3 className=" text-lg font-medium">{title}</h3>
                <div className="absolute top-1 right-6">
                    <Linkbox path="tasks/planner" />
                </div>
            </div>
            <p className={`rounded-xl bg-white py-2 mt-2 px-4 py-3 h-72 h-[750px]`}>Kalender</p>
        </div>
    );
}

export function MessageCard() {
    return (
        <div className="relative rounded-xl bg-gray-100 p-4 shadow-sm h-52 w-full">
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
                backgroundColor: '#456C8600',
                color: 'white',
            }}
        >
            <div className="w-full p-3 bg-zinc-100 rounded-xl shadow flex-col justify-start items-start gap-2.5 inline-flex scale-on-hover">
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
                    <div className="text-zinc-700 border-black border p-1 rounded-sm text-sm font-medium font-['Roboto'] leading-none tracking-wide">
                        {item.type}
                    </div>

                    <Linkbox path={'tasks/' + item.id} />
                </div>
            </div>
        </div>
    );
}
