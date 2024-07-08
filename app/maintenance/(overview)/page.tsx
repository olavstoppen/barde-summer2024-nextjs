import { Suspense } from 'react';
import { Tasks, Week } from '@/app/ui/maintenance/cards';

export default async function Page() {
    return (
        <main>
            <div className="mt-2"></div>
            <div className="grid gap-10 grid-cols-4 grid-rows-1 gap-3">
                <div className="col-span-3">
                    <Suspense>
                        <Tasks title="Dine oppgaver" value={1} />
                    </Suspense>
                </div>
                <div className="col-start-4">
                    <Suspense>
                        <Week title="Navigasjon" />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
