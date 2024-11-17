import Image from "next/image";

interface ProjectProps {
    thumbnail: string;
    title: string;
    date?: string;
}

const ProjectEach: React.FC<ProjectProps> = ({ thumbnail, title, date = "5th Aug 2024" }) => {
    return (
        <div className="w-full cursor-pointer">
            <Image src={thumbnail} objectFit="cover" sizes="100vw" height={0} width={0}
                alt="Madan Pokhrel" className=" h-[36rem] w-[100%] rounded-t-[1rem] object-cover " />
            <div className="bg-black_third p-4 rounded-b-[1rem]">
                <p className="text-[1.8rem] mb-2">{title}</p>
                <p className="text-grey text-[1.4rem]">{date}</p>

            </div>

        </div>
    )
}

export default ProjectEach;

