'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { BellIcon } from '@heroicons/react/24/outline';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    return (
        <>
            <div className="mx-auto sm:px-6 lg:px-8">
                <div className="relative flex h-16 justify-end">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-hvite text-sm">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <UserCircleIcon className="h-10 w-10" aria-hidden="true" />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    {({ focus }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                focus ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700',
                                            )}
                                        >
                                            Your Profile
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ focus }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                focus ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700',
                                            )}
                                        >
                                            Settings
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ focus }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                focus ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700',
                                            )}
                                        >
                                            Sign out
                                        </a>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    );
}
