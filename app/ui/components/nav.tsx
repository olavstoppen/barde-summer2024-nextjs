'use client';

import {
    CalendarDaysIcon,
    CheckCircleIcon,
    HomeIcon,
    TruckIcon,
    ClipboardIcon,
    Cog6ToothIcon,
    ArrowTrendingUpIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const links = [
    { title: 'Hjem', href: '/dashboard', icon: HomeIcon, variant: 'default' },
    { title: 'Prosjekt', href: '/project', icon: CheckCircleIcon, variant: 'default' },
    { title: 'Maskin', href: '/inventory', icon: TruckIcon, variant: 'default' },
];

const links1 = [
    { title: 'Statistikk', href: '/statistics', icon: ArrowTrendingUpIcon, variant: 'default' },
    { title: 'Vedlikehold', href: '/maintenance', icon: Cog6ToothIcon, variant: 'default' },
    { title: 'Koordinering', href: '/coordinate', icon: UserGroupIcon, variant: 'default' },
];

const links2 = [
    { title: 'Kalender', href: '/calender', icon: CalendarDaysIcon, variant: 'default' },
    { title: 'Behov', href: '/request', icon: ClipboardIcon, variant: 'default' },
];

export function Nav() {
    return (
        <div className="group flex flex-col gap-4 py-2 ">
            <nav className="grid gap-1 px-2 ">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={cn(
                            buttonVariants({ variant: link.variant, size: 'default' }),
                            link.variant === 'default' &&
                                'dark:bg-muted dark:text-white text-md dark:hover:bg-muted dark:hover:text-white',
                            'justify-start text-sm mb-1',
                        )}
                    >
                        <link.icon className="mr-5 h-6 w-6" />
                        {link.title}
                    </Link>
                ))}
                <Separator className="m-2" />
                {links1.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={cn(
                            buttonVariants({ variant: link.variant, size: 'default' }),
                            link.variant === 'default' &&
                                'dark:bg-muted dark:text-white text-md dark:hover:bg-muted dark:hover:text-white',
                            'justify-start text-sm mb-1',
                        )}
                    >
                        <link.icon className="mr-5 h-6 w-6" />
                        {link.title}
                    </Link>
                ))}
                <Separator className="m-2" />
                {links2.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={cn(
                            buttonVariants({ variant: link.variant, size: 'default' }),
                            link.variant === 'default' &&
                                'dark:bg-muted dark:text-white text-md dark:hover:bg-muted dark:hover:text-white',
                            'justify-start text-sm mb-1',
                        )}
                    >
                        <link.icon className="mr-5 h-6 w-6" />
                        {link.title}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
