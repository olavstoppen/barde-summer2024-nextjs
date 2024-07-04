import { Suspense } from 'react';
import CardWrapper, { MessageCard } from '@/app/ui/dashboard/cards';

export default async function Page() {
    return (
        <main>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
                <h1 className={`mb-4 text-8xl md:text-6xl`}>God morgen, Jens!</h1>
                <MessageCard />
            </div>
            <div className="mb-4 mt-6"></div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
                <Suspense>
                    <CardWrapper />
                </Suspense>
            </div>
        </main>
    );
}
