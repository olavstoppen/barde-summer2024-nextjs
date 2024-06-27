import Breadcrumbs from '@/app/ui/inventory/breadcrumb';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Inventory', href: '/inventory/' },
                    {
                        label: `Machine ${id}`,
                        href: `/inventory/${id}`,
                        active: true,
                    },
                ]}
            />
        </main>
    );
}
