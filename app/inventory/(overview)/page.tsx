import Pagination from '@/app/ui/inventory/pagination';
import Table from '@/app/ui/inventory/table';
import { Suspense } from 'react';

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
    const totalPages = 3;

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`text-2xl`}>Inventory</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8"></div>
            <Suspense key={query + currentPage}>
                <Table query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}
