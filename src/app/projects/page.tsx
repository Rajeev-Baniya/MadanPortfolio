import Banner from "@/components/common/banner";
import { gallery } from "../../../data";
import ProjectEach from "@/components/project/projecteach";
import Link from "next/link";

export default function Projects() {
    return (

        <main>
            <Banner title="Projects" paragraph="Here are some of my works I did in recent years" />
            <section className="common-padding_small bg-black_extra">
                <div className="grid grid-cols-12 gap-10">
                    {gallery.map((each, index) => {
                        return <div key={index} className="lg:col-span-4 md:col-span-6 col-span-12 ">
                            <Link href={`projects/${each.id}`}>
                                <ProjectEach thumbnail={each.thumbnail} title={each.title} />
                            </Link>
                        </div>
                    })}
                </div>
            </section>
        </main>
    )
}