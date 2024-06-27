import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
    type1: BanknotesIcon,
    type2: UserGroupIcon,
    type3: ClockIcon,
    type4: InboxIcon,
};

export default async function CardWrapper() {
    return (
        <>
            {/* NOTE: comment in this code when you get to this point in the course */}

            <Card title="Tittel" value={1} type="type1" />
            <Card title="Tittel" value={1} type="type2" />
            <Card title="Tittel" value={1} type="type3" />
            <Card title="Tittel" value={1} type="type4" />
        </>
    );
}

export function Card({
    title,
    value,
    type,
}: {
    title: string;
    value: number | string;
    type: 'type1' | 'type2' | 'type3' | 'type4';
}) {
    const Icon = iconMap[type];

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p
                className={`truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
                {value}
            </p>
        </div>
    );
}
