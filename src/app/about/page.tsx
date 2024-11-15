import Banner from "@/components/common/banner";
import Title from "@/components/common/title";
import Projects from "@/components/home/works/projects";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import Title from "@/components/common/title";

export default function About() {
    return (
        <main>
            <Banner title="Madan Pokhrel" paragraph="Photographer & Videographer" />
            <section className="common-padding_small bg-black_extra">
                <div className="flex items-center">
                    <div className="w-[50%]">
                        <Image src="https://res.cloudinary.com/dg5ku2nbh/image/upload/v1679218402/cld-sample-4.jpg" objectFit="cover" sizes="100vw" height={0} width={0}
                            alt="Madan Pokhrel" className=" h-[52rem] w-[100%] rounded-md " />
                    </div>
                    <div className="pl-[3.2rem] mt-5 w-[50%]">
                        <Title title="Who I am?" paragraph="A little bit about me" position="left" />

                        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tenetur maxime nisi quod ut debitis dolorem officia sit labore, facilis expedita sed rerum. Quidem sint a quas minus quaerat minima.</p>
                    </div>

                </div>
                <div className="flex items-center">

                    <div className="pr-[3.2rem] mt-5 w-[50%]">
                        <Title title="What I do?" paragraph="A  bit of my work" position="left" />

                        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tenetur maxime nisi quod ut debitis dolorem officia sit labore, facilis expedita sed rerum. Quidem sint a quas minus quaerat minima.</p>
                        <div className="pt-[3.2rem] flex gap-5">
                            <Link href="/contact"><Button varient="primary">Hire Me</Button></Link>
                            <Button varient="secondary">View All my Work</Button>

                        </div>
                    </div>


                    <div className="w-[50%]">
                        <Image src="https://res.cloudinary.com/dg5ku2nbh/image/upload/v1679218402/cld-sample-4.jpg" objectFit="cover" sizes="100vw" height={0} width={0}
                            alt="Madan Pokhrel" className=" h-[52rem] w-[100%] rounded-md " />
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