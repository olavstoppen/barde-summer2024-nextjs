import { Suspense } from 'react';
import CardWrapper from '@/app/ui/dashboard/cards';
import Dropdown from '@/app/ui/dropdown';

export default async function Page() {
    return (
        <main>
            <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
            <div className="mb-4 mt-4">
                <Dropdown />
            </div>
            <h1 className={`mb-4 text-xl md:text-2xl`}></h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense>
                    <CardWrapper />
                </Suspense>
            </div>
        </main>
    );
}
