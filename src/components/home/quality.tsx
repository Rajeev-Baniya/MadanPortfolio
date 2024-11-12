
import { FcInspection, FcBullish, FcCamcorderPro } from "react-icons/fc";
export default function Quality() {
    return (
        <div className="bg-black_extra">
            <section className="text-white common-padding flex items-center md:gap-[3.2rem] gap-[4.2rem] justify-between md:flex-nowrap flex-wrap">
                <div className="text-center flex flex-col items-center gap-[2.4rem]">
                    <div className="h-[6rem] w-[6rem] border border-primary rounded-[50%] flex justify-center items-center">
                        <FcInspection className="text-[3.2rem]" />
                    </div>
                    <h1 className="font-semibold text-[2.4rem]">Satisfied Clients</h1>
                    <p className="px-3 text-grey">Lorem , dolor sit amet. Officia repellendus beatae tempora similique, sed reiciendis magnam. Numquam soluta tenetur unde?</p>
                </div>
                <div className="text-center flex flex-col items-center gap-[2.4rem]">
                    <div className="h-[6rem] w-[6rem] border border-secondary rounded-[50%] flex justify-center items-center">
                        <FcBullish className="text-[3.2rem]" />
                    </div>
                    <h1 className="font-semibold text-[2.4rem]">High Quality</h1>
                    <p className="px-3 text-grey">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia repellendus beatae tempora similique, sed reiciendis magnam. Numquam soluta tenetur unde?</p>
                </div>
                <div className="text-center flex flex-col items-center gap-[2.4rem]">
                    <div className="h-[6rem] w-[6rem] border border-tertiary rounded-[50%] flex justify-center items-center">
                        <FcCamcorderPro className="text-[3.2rem]" />
                    </div>
                    <h1 className="font-semibold text-[2.4rem]">Pixel Perfect</h1>
                    <p className="px-3 text-grey">Lorem ipsum, dolor sit amet  adipisicing elit. Officia repellendus beatae , sed reiciendis magnam. Numquam soluta tenetur unde?</p>
                </div>
            </section>
        </div>
    )
}