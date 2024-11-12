import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaPhoneVolume } from "react-icons/fa6";
import { IoLocation, IoMail } from "react-icons/io5";



export default function Footer() {
    return (
        <section className="common-padding_small bg-black !pb-[2rem]">
            <div className="grid grid-cols-12 justify-between mb-[4.2rem] md:gap-0 gap-y-[2.6rem]">
                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Learn More</h1>
                    <div className="flex flex-col gap-6 text-grey">
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Document</a>
                    </div>

                </div>
                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Partners</h1>
                    <div className="flex flex-col gap-6 text-grey">

                        <a href="#">Hamro Weddings</a>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                    </div>

                </div>





                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Follow Me Here</h1>
                    <div className="flex gap-6 text-grey">

                        <a href='#'>  <FaFacebookF className='text-[1.8rem]' /> </a>
                        <a href='#'><FaInstagram className='text-[1.8rem]' /></a>
                        <a href='#'> <FaTwitter className='text-[1.8rem]' /></a>
                        <a href='#'> <FaLinkedin className='text-[1.8rem]' /></a>
                    </div>

                </div>


                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Contact</h1>
                    <div className="flex flex-col gap-6 text-grey">

                        <a href="#" className="flex items-center gap-3"><span className="p-3 bg-tertiary rounded-[50%] text-white"><IoLocation /></span> <span>Bhalam, Pokhara</span></a>
                        <a href="#" className="flex items-center gap-3"><span className="p-3 bg-tertiary rounded-[50%] text-white"><IoMail /></span> <span className="break-all">madan@example.com</span></a>
                        <a href="#" className="flex items-center gap-3"><span className="p-3 bg-tertiary rounded-[50%] text-white"><FaPhoneVolume /></span> <span>9812345678</span></a>

                    </div>
                </div>

            </div>
            <div className="text-center">
                <p className="logo block mb-2 text-white !text-[2.2rem]">Madan </p>
                <p className="text-grey text-[2rem]"> &copy;  All rights reserved.</p>


            </div>

        </section>
    )
}