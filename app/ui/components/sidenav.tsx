'use client';

import React from 'react';

import { Nav } from './nav';

export function SideNav() {
    return (
        <div className="flex h-full flex-col px-2 md:px-2 bg-gray-100">
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <div className="pt-4">
                    <Nav />
                </div>
                <div className="hidden h-auto w-full grow rounded-md  bg-gray-100 md:block"></div>
            </div>
        </div>
    );
}

/*                <form>
                    <button className=" flex w-full flex-col grow items-center gap-2 rounded-md p-3 text-md text-black font-medium md:flex-none md:justify-start md:p-2 md:px-3">
                        <ArrowRightStartOnRectangleIcon className="w-8 h-8 pb-1" />
                        <div className="hidden md:block">Logg ut</div>
                    </button>
                </form>*/
