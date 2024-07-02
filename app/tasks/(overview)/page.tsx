import Pagination from '@/app/ui/components/pagination';
import Table from '@/app/ui/tasks/table';
import React, { Suspense } from 'react';
import DatePickerValue from '@/app/ui/components/datepicker';
import Dropdown from '@/app/ui/tasks/dropdown';
import Search from '@/app/ui/tasks/search';
import { Dayjs } from 'dayjs';

export default async function Page({
    searchParams,
    dateParams,
}: {
    searchParams?: string;
    dateParams?: Dayjs | null;
}) {
    const search = searchParams || '';
    const currentPage = 1;
    const totalPages = 5;
    const date = dateParams;

    return (
        <div>
            <div className="max-w-7xl">
                <div className="flex h-full w-full items-center justify-between">
                    <h1 className={`text-2xl`}>
                        Her er alle dine tidligere vedlikeholdsoppgaver
                    </h1>
                </div>
                <div className="grid grid-cols-4 mt-6 gap-2">
                    <div className="max-w-48 mt-4">
                        <Search placeholder="Search ..." />
                    </div>
                    <div className="max-w-64 mt-4">
                        <DatePickerValue />
                    </div>
                    <div className="max-w-64 mt-4">
                        <DatePickerValue />
                    </div>
                    <div className="max-w-48 mt-4 col-end-6">
                        <Dropdown />
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2"></div>
                <Suspense key={search + currentPage}>
                    <Table
                        query={search}
                        date={date}
                        currentPage={currentPage}
                    />
                </Suspense>
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages} />
                </div>
            </div>
        </div>
    );
}
