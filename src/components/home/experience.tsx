export default function Experience() {
    return (
        <section className="experience common-padding flex gap-[2rem] text-white  justify-between md:flex-nowrap flex-wrap">
            <div className="text-center md:w-1/2 w-full p-[1rem] border border-white rounded exp_left">
                <h1 className="exp_year ">7+</h1>
                <p className="exp_desc">Years <span className="text-primary">Experience</span></p>
            </div>

            <div className="grid grid-cols-12 gap-x-[2rem] gap-y-[3.6rem] justify-between md:w-1/2 w-full  z-10">
                <div className="exp_left text-center col-span-6 row-span-3 w-full border border-white rounded py-5">
                    <p className="exp_sm_year">30+</p>
                    <p className="exp_sm_desc">Clients</p>
                </div>
                <div className="exp_left text-center col-span-6 row-span-3 w-full border border-white rounded py-5">
                    <p className="exp_sm_year">20+</p>
                    <p className="exp_sm_desc">Wedding Shoots</p>
                </div>
                <div className="exp_left text-center col-span-6 row-span-3 w-full border border-white rounded py-5">
                    <p className="exp_sm_year">30+</p>
                    <p className="exp_sm_desc">Outdoor Shoots</p>
                </div>
                <div className="exp_left text-center col-span-6 row-span-3 w-full border border-white rounded py-5">
                    <p className="exp_sm_year">10+</p>
                    <p className="exp_sm_desc">Video Shoots</p>
                </div>

            </div>
        </section>
    )
}