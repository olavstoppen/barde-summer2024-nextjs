'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="max-w-7xl pt-4">
            <h1 className="text-3xl max-w-xl pb-6">Behov</h1>
            <div className={`flex flex-col rounded-xl mt-2 px-4 py-3 h-72 h-[750px] max-w-lg`}>
                <Button variant="outline" className=" pr-4 mr-3 mb-2 h-[50px] bg-surf-cont">
                    <Link key={'/request/new-request'} href={'/request/new-request'} className="w-full">
                        Meldt om nytt behov
                    </Link>
                </Button>

                <Button variant="outline" className="pr-4 mr-3 h-[50px] bg-surf-cont">
                    <Link key={'/request/all-requests'} href={'/request/all-requests'} className="w-full">
                        Alle innmeldte behov
                    </Link>
                </Button>
            </div>
        </div>
    );
}
