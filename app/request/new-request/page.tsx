import Breadcrumbs from '@/app/ui/components/breadcrumb';
import { RequestForm } from '@/app/ui/request/request-form';

export default async function Page() {
    return (
        <section>
            <div className="max-w-7xl pt-4">
                <div className="mb-6">
                    <Breadcrumbs
                        componentslink="request"
                        components="Behov"
                        breadcrumb="Meld inn behov"
                        className="mb-4"
                    />
                </div>
                <h1 className="text-3xl max-w-xl pb-6">Meld inn behov</h1>
                <RequestForm />
            </div>
        </section>
    );
}
