import AuthenticatedHandle from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react"
import SubscriptionCard from "@/Components/SubscriptionCard";
export default function SubscriptionPlan() {
    return <AuthenticatedHandle>
            <Head title="Subscription Plan" />

            {/* Start Content Here */}
            <div className="ml-[300px] px-[50px]">
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    <SubscriptionCard name={`Basic`} price={289000} durationInMonth={2} features={['Unlock 15 basic movies','Up to 3 users','Support 24/7 ready']} />
                    <SubscriptionCard name={`For Almighty`} price={400000} durationInMonth={10} features={['Unlock unlimited basic movies','Up to 5 users','Support 24/7 ready']}  isPremium />
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </div>
            {/* End Content Here */}
        </AuthenticatedHandle>
    ;
}
