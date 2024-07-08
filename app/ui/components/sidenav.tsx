import { ArrowRightStartOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/outline';
import NavLinks from './nav-links';

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-2 py-4 md:px-2 bg-pri-cont">
            <div className="flex grow flex-row pt-5 justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                {/*<Bars3Icon className="h-12 w-12 pl-4" />*/}
                <div className="pt-1">
                    <NavLinks />
                </div>
                <div className="hidden h-auto w-full grow rounded-md bg-pri-cont md:block"></div>
                <form>
                    <button className=" flex w-full flex-col grow items-center gap-2 rounded-md p-3 text-md text-black font-medium md:flex-none md:justify-start md:p-2 md:px-3">
                        <ArrowRightStartOnRectangleIcon className="w-8 h-8 pb-1" />
                        <div className="hidden md:block">Logg ut</div>
                    </button>
                </form>
            </div>
        </div>
    );
}
