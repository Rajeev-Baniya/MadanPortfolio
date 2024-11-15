import Banner from "@/components/common/banner";
import Title from "@/components/common/title";
import Projects from "@/components/home/works/projects";
import Button from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import Title from "@/components/common/title";

export const metadata: Metadata = {
    title: "About",
    description: "Madan Pokhrel is a professional wedding and events photographer. He is based in Pokhara. He has over 7 yeaars of experience.",
    keywords: "Madan Pokhrel, Madan Pokhrel Photographer, Madan Pokhrel Pokhara, Madan Pokhrel Portfolio, Madan Pokhrel Photography"
}

export default function About() {
    return (
        <main>
            <Banner title="Madan Pokhrel" paragraph="Photographer & Videographer" />
            <section className="common-padding_small bg-black_extra">
                <div className="flex items-center lg:flex-row flex-col lg:mb-0 mb-[6.4rem]">
                    <div className="lg:w-[50%] w-[100%]">
                        <Image src="/madan.jpg" objectFit="cover" sizes="100vw" height={0} width={0}
                            alt="Madan Pokhrel" className=" lg:h-[52rem] h-[42rem] w-[100%] rounded-md object-cover " />
                    </div>
                    <div className="lg:pl-[3.2rem] pl-0  mt-5 lg:w-[50%] w-[100%]">
                        <Title title="Who I am?" paragraph="A little bit about me" position="left" />

                        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tenetur maxime nisi quod ut debitis dolorem officia sit labore, facilis expedita sed rerum. Quidem sint a quas minus quaerat minima.</p>
                    </div>

                </div>
                <div className="flex items-center lg:flex-row flex-col-reverse">

                    <div className="lg:pr-[3.2rem] pr-0 mt-5 lg:w-[50%] w-[100%]">
                        <Title title="What I do?" paragraph="A  bit of my work" position="left" />

                        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tenetur maxime nisi quod ut debitis dolorem officia sit labore, facilis expedita sed rerum. Quidem sint a quas minus quaerat minima.</p>
                        <div className="pt-[3.2rem] flex gap-5">
                            <Link href="/contact"><Button varient="primary">Hire Me</Button></Link>
                            <Button varient="secondary">View All my Work</Button>

                        </div>
                    </div>


                    <div className="lg:w-[50%] w-[100%]">
                        <Image src="https://res.cloudinary.com/dg5ku2nbh/image/upload/v1679218402/cld-sample-4.jpg" objectFit="cover" sizes="100vw" height={0} width={0}
                            alt="Madan Pokhrel" className=" lg:h-[52rem] h-[42rem] w-[100%] rounded-md " />
                    </div>


                </div>
            </section>
            <div className=" bg-black_extra">
                <Title title="Latest Projects" paragraph="My Latest Photo Projects" position="center" link="projects" />
                <div className="mt-[2.4rem]">
                    <Projects />
                </div>
            </div>
        </main>
    )
} 