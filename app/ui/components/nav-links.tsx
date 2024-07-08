'use client';

import {
    ArchiveBoxArrowDownIcon,
    Bars3Icon,
    CalendarDaysIcon,
    CheckCircleIcon,
    DocumentDuplicateIcon,
    HomeIcon,
    TruckIcon,
    ClipboardIcon,
    Cog6ToothIcon,
    ArrowTrendingUpIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Hjem', href: '/dashboard', icon: HomeIcon },
    { name: 'Prosjekt', href: '/project', icon: CheckCircleIcon },
    { name: 'Maskin', href: '/inventory', icon: TruckIcon },
    { name: 'Koordinering', href: '/coordinate', icon: UserGroupIcon },
    { name: 'Vedlikehold', href: '/maintenance', icon: Cog6ToothIcon },
    { name: 'Statistikk', href: '/statistics', icon: ArrowTrendingUpIcon },
    { name: 'Kalender', href: '/calender', icon: CalendarDaysIcon },
    { name: 'Behov', href: '/request', icon: ClipboardIcon },
];
const tja = [{ name: 'Requests', href: '/request', icon: TruckIcon }];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            <h2 className="mb-2 px-4 text-md font-semibold tracking-tight">Navigasjon</h2>

            {links.map(link => {
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
