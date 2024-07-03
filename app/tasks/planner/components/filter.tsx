import { AdjustmentsHorizontalIcon } from '@heroicons/react/16/solid';

export default function Filter() {
    return (
        <div className="w-[83px] rounded-lg border border-neutral-500 justify-center items-center flex">
            <div className="w-[83px] pl-2 pr-4 py-1.5 justify-center items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                    <AdjustmentsHorizontalIcon
                        className="w-[18px] h-[18px] left-0 top-0 absolute"
                        color="#AC3400"
                    />
                </div>
                <div className="text-center text-zinc-700 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                    Filter
                </div>
            </div>
        </div>
    );
}
