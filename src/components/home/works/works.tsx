import Projects from "./projects";

export default function Works() {
    return (
        <div>
            <div className="text-center common-padding_small bg-black_extra text-white">
                <h1 className="title mb-3">Latest Projects</h1>
                <div className="flex justify-center gap-3 mb-3 text-grey"><p>My Latest Photo Projects  / </p> <a href="/" className="text-primary font-semibold">View All</a></div>
                <div className="text-center ">
                    <hr className="hr-short" />
                </div>
            </div>
            <Projects />
        </div>
    )
}