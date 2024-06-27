import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import {
    ChevronDownIcon,
    PencilIcon,
    Square2StackIcon,
} from '@heroicons/react/16/solid';

export default function Dropdown() {
    return (
        <div className="text-left">
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1">
                    Velg prosjekt
                    <ChevronDownIcon className="size-4 fill-white/60" />
                </MenuButton>

                <MenuItems
                    anchor="bottom"
                    className="w-52 origin-top-right rounded-xl border border-white bg-white p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    <MenuItem>
                        <Link
                            href="/dashboard"
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
                        >
                            <PencilIcon className="size-4 fill-black" />
                            Edit
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="/dashboard"
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
                        >
                            <Square2StackIcon className="size-4 fill-black" />
                            Duplicate
                        </Link>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    );
}
