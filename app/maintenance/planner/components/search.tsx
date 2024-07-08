import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

export default function Search() {
    return (
        <div className="w-[230px] rounded-lg border border-neutral-500 justify-center items-center flex">
            <div className="pl-2 pr-3 py-1.5 justify-center items-center gap-2 flex">
                <MagnifyingGlassIcon
                    className="w-[18px] h-[18px] relative"
                    color="#AC3400"
                />
                <div className="text-center text-zinc-700 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                    Search...
                </div>
            </div>
        </div>
    );
}
