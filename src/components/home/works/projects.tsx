import Link from "next/link";
import { gallery } from "../../../../data";


export default function Projects() {
    return (
        <section>
            <div className="grid grid-cols-12 gallery">
                {gallery.map(each => (
                    <Link href={`/projects/${each.id}`} key={each.id} className="md:col-span-3 col-span-6 gallery_each block" title="click to view">
                        <div style={{ background: `url(${each.thumbnail})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="h-[26rem]">
                            <div className="h-full w-full gallery_each-text relative ">
                                <div className="absolute bottom-7 left-4  text-[#FFFFFF]">
                                    <p className=" font-bold text-4xl mb-2">{each.title}</p>
                                    <p className=" font-medium text-2xl">{each.description}</p>
                                </div>
                                <p className="absolute bottom-7 text-[#FFFFFF] text-6xl right-4 font-bold">+</p>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

        </section>
    )
}