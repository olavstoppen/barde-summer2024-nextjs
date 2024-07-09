import Breadcrumbs from '@/app/ui/components/breadcrumb';

export default async function Page() {
    return (
        <section>
            <div className="max-w-7xl">
                <div className="mb-6">
                    <Breadcrumbs componentslink="request" components="Behov" breadcrumb="Alle behov" className="mb-4" />
                </div>
                <h1 className="text-3xl max-w-xl pb-6">Alle innmeldte behov</h1>
            </div>
        </section>
    );
}
