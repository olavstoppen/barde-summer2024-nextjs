'use client';

import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Checkbox,
} from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon, HomeIcon } from '@heroicons/react/16/solid';
import { Fragment, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const links = [
    { name: 'Prosjekt 1', href: '/dashboard', icon: HomeIcon },
    { name: 'Prosjekt 2', href: '/dashboard', icon: HomeIcon },
    { name: 'Prosjekt 3', href: '/dashboard', icon: HomeIcon },
];

export default function Dropdown() {
    const pathname = usePathname();
    const [enabled, setEnabled] = useState(false);
    return (
        <div className="text-left">
            <Menu>
                <MenuButton className="w-24 inline-flex items-center gap-2 rounded-md border bg-white-800 py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-100 data-[open]:bg-gray-100 data-[focus]:outline-1">
                    <AdjustmentsHorizontalIcon className="size-4 fill-black/60" />
                    Filter
                </MenuButton>

                <MenuItems
                    anchor="bottom end"
                    className="w-40 origin-top-right rounded-xl border border-white bg-grey-100 p-1 mt-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    <>
                        {links.map(link => {
                            return (
                                <MenuItem key={link.href} as={Fragment}>
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100"
                                    >
                                        <Checkbox
                                            checked={enabled}
                                            onChange={setEnabled}
                                            className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
                                        >
                                            {/* Checkmark icon */}
                                            <svg
                                                className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </Checkbox>
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
