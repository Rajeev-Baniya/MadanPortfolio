
interface BannerProps {
    title: string;
    paragraph: string;
}

const Banner: React.FC<BannerProps> = ({ title, paragraph }) => {
    return (
        <section className="h-[55vh] relative !bg-cover !bg-center" style={{ backgroundImage: "linear-gradient(to right top, rgba(18, 17, 14, 0.6), rgba(18, 17, 14, 0.3)), url('dp.jpg')" }}>
            <div className="absolute bottom-10 left-[5.5%]">
                <h1 className="text-[4.6rem] font-extrabold capitalize">
                    {title}
                </h1>
                <hr className="hr-short !mx-0 !my-[1.8rem]" />
                <p className="w-[70%]">{paragraph}</p>

            </div>

        </section>
    )
}

export default Banner;