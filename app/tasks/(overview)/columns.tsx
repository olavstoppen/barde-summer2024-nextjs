'use client';

import { ColumnDef } from '@tanstack/react-table';

import { ArrowRightIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';
import { Button } from '@/app/ui/components/table/button';
import { task } from '@/app/lib/types';
import { ArrowUpIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';

export const columns: ColumnDef<task>[] = [
    {
        accessorKey: 'id',
        header: ({ column }) => {
            return (
                <Button
                    variant="default"
                    className="text-black rounded-xl"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    ID
                    <ChevronUpDownIcon className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button
                    variant="default"
                    className="text-black"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Oppgave
                    <ChevronUpDownIcon className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'start_date',
        header: ({ column }) => {
            return (
                <Button
                    variant="default"
                    className="text-black"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Start date
                    <ChevronUpDownIcon className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'machine',
        header: () => {
            return <div className="flex text-black">Maskin</div>;
        },
    },
    {
        accessorKey: 'type',
        header: () => {
            return <div className="flex text-black">Type</div>;
        },
    },
    {
        id: 'actions',
        header: '',
        cell: ({ row }) => {
            return (
                <Link
                    href={`/tasks/${(parseInt(row.id) + 1).toString()}`}
                    className="flex h-10 rounded-xl items-center rounded-lg px-4 text-sm font-medium"
                >
                    <ArrowRightIcon className="h-5 md:ml-4 text-pri rounded-xl" />
                    <span className="hidden md:block ml-3 text-pri rounded-xl">Se info</span>
                </Link>
            );
        },
    },
];
