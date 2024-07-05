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

const links = [
    { name: 'Hjem', href: '/dashboard', icon: HomeIcon },
    { name: 'Inventory', href: '/inventory', icon: TruckIcon },
    { name: 'Requests', href: '/request', icon: TruckIcon },
    { name: 'Oppgaver', href: '/tasks/planner', icon: CheckCircleIcon },
    { name: 'Kalender', href: '/tasks/planner', icon: CalendarDaysIcon },
    { name: 'Historikk', href: '/tasks', icon: ArchiveBoxArrowDownIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map(link => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex flex-col grow items-center justify-center gap-2 text-sm font-medium md:flex-none md:justify-start  md:p-2 md:px-3"
                    >
                        <LinkIcon
                            className={clsx('rounded-2xl w-10 h-10 p-2', {
                                'bg-sec-cont text-white w-10 h-10 rounded-2xl p-2': pathname.includes(link.href),
                            })}
                        />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
