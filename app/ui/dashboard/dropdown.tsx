'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon, HomeIcon } from '@heroicons/react/16/solid';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Prosjekt 1', href: '/dashboard', icon: HomeIcon },
    { name: 'Prosjekt 2', href: '/dashboard', icon: HomeIcon },
    { name: 'Prosjekt 3', href: '/dashboard', icon: HomeIcon },
];

export default function Dropdown() {
    const pathname = usePathname();
    return (
        <div className="text-left">
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1">
                    Velg prosjekt
                    <ChevronDownIcon className="size-4 fill-white/60" />
                </MenuButton>

                <MenuItems
                    anchor="bottom start"
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
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
