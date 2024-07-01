'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon, HomeIcon } from '@heroicons/react/16/solid';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const links = [
    { name: 'Prosjekt 1', href: '/dashboard', icon: HomeIcon },
    { name: 'Prosjekt 2', href: '/dashboard', icon: HomeIcon },
    { name: 'Prosjekt 3', href: '/dashboard', icon: HomeIcon },
];

export default function Search() {
    const pathname = usePathname();
    return (
        <div className="text-left">
            <Menu>
                <MenuButton className="w-24 inline-flex items-center gap-2 rounded-md border bg-white-800 py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-100 data-[open]:bg-gray-100 data-[focus]:outline-1">
                    <MagnifyingGlassIcon className="size-4 fill-black/60" />
                    Søk ...
                </MenuButton>

                <MenuItems
                    anchor="bottom start"
                    className=" origin-top-right rounded-xl border border-white bg-sky-100 p-1 mt-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    <>
                        {links.map(link => {
                            return (
                                <MenuItem key={link.href} as={Fragment}>
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-50"
                                    >
                                        <p>{link.name}</p>
                                    </Link>
                                </MenuItem>
                            );
                        })}
                    </>
                </MenuItems>
            </Menu>
        </div>
    );
}
