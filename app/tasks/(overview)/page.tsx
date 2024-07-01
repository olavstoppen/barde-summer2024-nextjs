import Pagination from '@/app/ui/components/pagination';
import Table from '@/app/ui/tasks/table';
import React, { Suspense } from 'react';
import { DatepickerButton } from '@/app/ui/components/datepicker';
import Dropdown from '@/app/ui/tasks/dropdown';
import Search from '@/app/ui/tasks/search';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = 10;

    return (
        <div>
            <div className="max-w-7xl">
                <div className="flex w-full items-center justify-between">
                    <h1 className={`text-2xl`}>
                        Her er alle dine tidligere vedlikeholdsoppgaver
                    </h1>
                </div>
                <div className="grid grid-cols-4 mt-6">
                    <div className="max-w-48 mt-4">
                        <Search />
                    </div>
                    <div className="max-w-48 mt-4">
                        <DatepickerButton />
                    </div>
                    <div className="max-w-48 mt-4">
                        <DatepickerButton />
                    </div>
                    <div className="max-w-48 mt-4 col-end-6">
                        <Dropdown />
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2"></div>
                <Suspense key={query + currentPage}>
                    <Table query={query} currentPage={currentPage} />
                </Suspense>
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages} />
                </div>
            </div>
        </div>
    );
}
