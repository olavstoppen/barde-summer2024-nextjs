'use client';

import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Checkbox,
} from '@headlessui/react';
import { HomeIcon } from '@heroicons/react/16/solid';
import { Fragment, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const links = [
    { id: 1, name: 'Prosjekt 1', icon: HomeIcon },
    { id: 2, name: 'Prosjekt 2', icon: HomeIcon },
    { Id: 3, name: 'Prosjekt 3', icon: HomeIcon },
];

export default function Dropdown() {
    const pathname = usePathname();

    const [enabled, setEnabled] = useState(false);

    return (
        <div className="text-left">
            <Menu>
                <MenuButton className="h-10 w-36 inline-flex items-center gap-2 rounded border bg-white py-1.5 px-3 text-sm/6 font-semibold data-[hover]:bg-gray-100 data-[open]:bg-gray-100">
                    <AdjustmentsHorizontalIcon className="size-4 fill-black/60" />
                    Filter
                </MenuButton>

                <MenuItems
                    anchor="bottom end"
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <>
                        {links.map(link => {
                            return (
                                <MenuItem key={link.name} as={Fragment}>
                                    <div className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                                        <Checkbox
                                            checked={enabled}
                                            onChange={setEnabled}
                                            className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
                                        >
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
                                    </div>
                                </MenuItem>
                            );
                        })}
                    </>
                </MenuItems>
            </Menu>
        </div>
    );
}
