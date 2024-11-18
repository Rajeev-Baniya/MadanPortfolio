import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneVolume, FaYoutube } from "react-icons/fa6";
import { IoLocation, IoMail } from "react-icons/io5";



export default function Footer() {
    return (
        <section className="common-padding_small bg-black !pb-[2rem]">
            <div className="grid grid-cols-12 justify-between mb-[4.2rem] md:gap-0 gap-y-[2.6rem]">
                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Learn More</h1>
                    <div className="flex flex-col gap-6 text-grey">
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <a href="/projects">Projects</a>
                    </div>

                </div>
                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Partners</h1>
                    <div className="flex flex-col gap-6 text-grey">

                        <a href="https://www.facebook.com/hamroweddings/" target="_blank">Hamro Weddings</a>
                        <a href="https://www.facebook.com/hamroweddings/" target="_blank">Facebook</a>
                        <a href="https://www.instagram.com/hamroweddings/" target="_blank">Instagram</a>
                    </div>

                </div>





                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Follow Me Here</h1>
                    <div className="flex gap-6 text-grey">

                        <a href='https://www.facebook.com/madan.pokhrel.73' target="_blank">  <FaFacebookF className='text-[1.8rem]' /> </a>
                        <a href='https://www.instagram.com/madan.__.pokhrel/' target="_blank"><FaInstagram className='text-[1.8rem]' /></a>
                        <a href='https://www.youtube.com/@hamroweddings' target="_blank"> <FaYoutube className='text-[1.8rem]' /></a>
                        <a href='#'> <FaLinkedin className='text-[1.8rem]' /></a>
                    </div>

                </div>


                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Contact</h1>
                    <div className="flex flex-col gap-6 text-grey">

                        <a href="#" className="flex items-center gap-3"><span className="p-3 bg-tertiary rounded-[50%] text-white"><IoLocation /></span> <span>Bhalam, Pokhara</span></a>
                        <a href="#" className="flex items-center gap-3"><span className="p-3 bg-tertiary rounded-[50%] text-white"><IoMail /></span> <span className="break-all">madan@example.com</span></a>
                        <a href="tel:+977 9805891112" className="flex items-center gap-3"><span className="p-3 bg-tertiary rounded-[50%] text-white"><FaPhoneVolume /></span> <span>+977 9805891112</span></a>

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