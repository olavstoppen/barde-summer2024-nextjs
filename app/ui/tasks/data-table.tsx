'use client';

import { useState } from 'react';

import {
    ColumnDef,
    flexRender,
    SortingState,
    ColumnFiltersState,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
    Column,
} from '@tanstack/react-table';

import { AdjustmentsHorizontalIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { DateRange } from 'react-day-picker';
import React from 'react';
import { addDays } from 'date-fns';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from './table/dropdown-menu';
import { Input } from './table/input';
import { Button } from './table/button';
import { DatePickerWithRange } from './table/date-picker';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table/table';
import { DataTablePagination } from './table/table-pagination';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    });

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
            rowSelection,
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onRowSelectionChange: setRowSelection,
    });

    const machines = ['Traktor', 'Gravemaskin', 'Lastebil'];
    const types = ['Lekkasje', 'Motor', 'Service', 'Styring'];

    return (
        <>
            {/* Filters */}

            <div className="flex items-center justify-between">
                <div className="flex items-center py-6">
                    <Input
                        placeholder="Search by name..."
                        value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
                        onChange={event => table.getColumn('name')?.setFilterValue(event.target.value)}
                        className="max-w-sm mr-3"
                    />

                    {/* Types filter*/}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto pr-4 mr-3">
                                <AdjustmentsHorizontalIcon className="w-5 h-5 pr-1" />
                                Type
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            {types.map((item: string) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={item}
                                        className="capitalize"
                                        checked={table.getColumn('type')?.getFilterValue() === item}
                                        onCheckedChange={() =>
                                            table.getColumn('type')?.getFilterValue() === item
                                                ? table.getColumn('type')?.setFilterValue('')
                                                : table.getColumn('type')?.setFilterValue(item)
                                        }
                                    >
                                        {item}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Machine filter*/}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                <AdjustmentsHorizontalIcon className="w-5 h-5 pr-1" />
                                Maskin
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            {machines.map((item: string) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={item}
                                        className="capitalize"
                                        checked={table.getColumn('machine')?.getFilterValue() === item}
                                        onCheckedChange={() =>
                                            table.getColumn('machine')?.getFilterValue() === item
                                                ? table.getColumn('machine')?.setFilterValue('')
                                                : table.getColumn('machine')?.setFilterValue(item)
                                        }
                                    >
                                        {item}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <DatePickerWithRange dates={date} setDate={setDate} />
                {/*<p>{date?.from?.toLocaleDateString()}</p>*/}
            </div>

            {/* Table */}
            <div className="rounded-lg border border-white">
                <Table className="rounded-lg bg-pri-cont border-white border">
                    <TableHeader className="bg-pri-cont text-black rounded-lg">
                        {table.getHeaderGroups().map((headerGroup: { id: any; headers: any[] }) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    return (
                                        <TableHead key={header.id} className="rounded-lg">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table
                                .getRowModel()
                                .rows.map(
                                    (row: {
                                        id: React.Key | null | undefined;
                                        getIsSelected: () => any;
                                        getVisibleCells: () => any[];
                                    }) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && 'selected'}
                                            className="bg-surf-cont border border-white"
                                        >
                                            {row.getVisibleCells().map(cell => (
                                                <TableCell key={cell.id} className="bg-surf-cont">
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ),
                                )
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center bg-gray-100">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="mt-6">
                <DataTablePagination table={table} />
            </div>
        </>
    );
}
