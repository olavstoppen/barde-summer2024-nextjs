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
    searchParams?: {
        query?: string;
        page?: string;
    };
    dateParams?: Dayjs | null;
}) {
    const search = searchParams?.query || '';
    const currentPage = 1;
    const totalPages = 5;
    const date = dateParams;

    return (
        <div>
            <div className="max-w-7xl">
                <h1 className={`text-2xl max-w-72`}>Her er alle dine tidligere vedlikeholdsoppgaver</h1>
                <div className="flex items-center justify-between gap-2 pt-5">
                    <div className="size-auto mt-4 flex items-center justify-between gap-2">
                        <Search placeholder="Search ..." />
                        <Dropdown />
                    </div>
                    <div className="size-auto mt-4 flex items-center justify-between gap-2">
                        <DatePickerValue />
                        <DatePickerValue />
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2"></div>
                <Suspense key={search + currentPage}>
                    <Table query={search} date={date} currentPage={currentPage} />
                </Suspense>
                <div className="mt-5 flex w-full justify-end">
                    <Pagination totalPages={totalPages} />
                </div>
            </div>
        </div>
    );
}
