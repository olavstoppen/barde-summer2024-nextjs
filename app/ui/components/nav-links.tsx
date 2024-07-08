'use client';

import {
    ArchiveBoxArrowDownIcon,
    Bars3Icon,
    CalendarDaysIcon,
    CheckCircleIcon,
    DocumentDuplicateIcon,
    HomeIcon,
    TruckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ScrollArea } from '@/components/ui/scroll-area';

const maintenance = [
    { name: 'Hjem', href: '/dashboard', icon: HomeIcon },
    { name: 'Oppgaver', href: '/tasks/planner', icon: CheckCircleIcon },
    { name: 'Historikk', href: '/tasks', icon: ArchiveBoxArrowDownIcon },
];

const coordinator = [
    { name: 'Hjem', href: '/dashboard', icon: HomeIcon },
    { name: 'Inventory', href: '/inventory', icon: TruckIcon },
    { name: 'Oppgaver', href: '/tasks/planner', icon: CheckCircleIcon },
    { name: 'Historikk', href: '/tasks', icon: ArchiveBoxArrowDownIcon },
];

const projectleader = [
    { name: 'Hjem', href: '/dashboard', icon: HomeIcon },
    { name: 'Inventory', href: '/inventory', icon: TruckIcon },
];

const tja = [{ name: 'Requests', href: '/request', icon: TruckIcon }];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            <h2 className="mb-2 px-4 text-md font-semibold tracking-tight">Vedlikehold</h2>

            {maintenance.map(link => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex grow items-center justify-center gap-2 text-sm font-medium md:flex-none md:justify-start  md:p-2 md:px-3"
                    >
                        <LinkIcon
                            className={clsx('rounded-2xl w-7 h-7 p-1', {
                                'bg-sec-cont text-white w-8 h-8 rounded-2xl p-2': pathname.includes(link.href),
                            })}
                        />

                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
            <h2 className="mb-2 mt-4 px-4 text-md font-semibold tracking-tight">Prosjektleder</h2>

            {maintenance.map(link => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center justify-center gap-2 text-sm font-medium md:flex-none md:justify-start  md:p-2 md:px-3"
                    >
                        <LinkIcon
                            className={clsx('rounded-2xl w-7 h-7 p-1', {
                                'bg-sec-cont text-white w-8 h-8 rounded-2xl p-2': pathname.includes(link.href),
                            })}
                        />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
            <h2 className="mb-2 mt-4 px-4 text-md font-semibold tracking-tight">Koordinator</h2>

            {coordinator.map(link => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex grow items-center justify-center gap-2 text-sm font-medium md:flex-none md:justify-start  md:p-2 md:px-3"
                    >
                        <LinkIcon
                            className={clsx('rounded-2xl w-7 h-7 p-1', {
                                'bg-sec-cont text-white w-8 h-8 rounded-2xl p-2': pathname.includes(link.href),
                            })}
                        />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
            <h2 className="mb-2 mt-4 px-4 text-md font-semibold tracking-tight">Tja</h2>

            {tja.map(link => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex grow items-center justify-center gap-2 text-sm font-medium md:flex-none md:justify-start  md:p-2 md:px-3"
                    >
                        <LinkIcon
                            className={clsx('rounded-2xl w-7 h-7 p-1', {
                                'bg-sec-cont text-white w-8 h-8 rounded-2xl p-2': pathname.includes(link.href),
                            })}
                        />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
