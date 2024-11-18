import Link from "next/link";
import PricingList from "./priceList";

export function Pricing() {
    return (
        <section>
            <div className="common-padding_small bg-black_extra text-white flex justify-between items-center lg:flex-row flex-wrap">
                <div className="lg:basis-[30%] basis-[100%]">
                    <h1 className="title mb-3">Services & Pricing</h1>
                    <div className="gap-3 mb-3 text-grey flex"><p>My Latest Photo Projects  / </p> <Link href="#" className="text-primary font-semibold">View All</Link></div>
                    <div>
                        <hr className="hr-short" style={{ margin: "2.4rem 0" }} />
                    </div>
                </div>
                <p className="lg:basis-[70%] basis-[100%]  text-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, sapiente! Culpa totam at excepturi adipisci officia voluptate quisquam magnam eligendi.</p>
            </div>
            <PricingList />
        </section>
    );
}