import Banner from "@/components/common/banner";
import Title from "@/components/common/title";
import Button from "@/components/ui/button";
import { Metadata } from "next";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaPhoneVolume } from "react-icons/fa6";
import { IoLocation, IoMail } from "react-icons/io5";


export const metadata: Metadata = {
    title: "Contact",
    description: "Madan Pokhrel, Madan Pokhrel Photographer, Photographer, Pokhara , Madan Pokhrel Photography, Photographer Madan, Wedding Photographer"
}

export default function Contact() {
    const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam minima dolorem. Sequi corrupti assumenda tempore culpa magni adipisci autem distinctio rem?"
    return (
        <main>
            <Banner title="contact" paragraph={paragraph} />
            <section className="common-padding bg-black_extra">
                <div className="flex gap-[3.2rem] items-center md:flex-nowrap flex-wrap">
                    <div className="h-[60rem] rounded-[1rem] w-[100%] md:w-[50%] relative !bg-cover !bg-center flex items-center justify-center" style={{ backgroundImage: "linear-gradient(to right top, rgba(18, 17, 14, 0.6), rgba(18, 17, 14, 0.3)), url('/dp.jpg')" }}>
                        <div className="bg-[#04000299] text-center md:w-[70%] w-[90%] h-[50%] rounded-[1.2rem] px-[2.4rem] flex items-center">
                            <div>
                                <div className="mb-10">
                                    <p className="flex items-center gap-3 mb-4"><span className="p-2 text-white"><IoLocation /></span> <span>Address: Bhalam, Pokhara</span></p>
                                    <a href="tel:1234" className="flex items-center gap-3 mb-4"><span className="p-2 text-white"><FaPhoneVolume /></span> <span>Phone: +977 9805891112</span></a>
                                    <a href="mailto:abc@example.com" className="flex items-center gap-3 mb-4"><span className="p-2 text-white"><IoMail /></span> Email: <span className="text-primary">abc@example.com</span></a>
                                </div>
                                <div>
                                    <div className="flex gap-6">
                                        <a href='#' className="p-4 bg-tertiary rounded-[50%] text-white" >  <FaFacebookF className='text-[1.8rem]' /> </a>
                                        <a href='#' className="p-4 bg-tertiary rounded-[50%] text-white"><FaInstagram className='text-[1.8rem]' /></a>
                                        <a href='#' className="p-4 bg-tertiary rounded-[50%] text-white"> <FaTwitter className='text-[1.8rem]' /></a>
                                        <a href='#' className="p-4 bg-tertiary rounded-[50%] text-white"> <FaLinkedin className='text-[1.8rem]' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-[100%] md:w-[50%] ">
                        <Title title="Drop Me a Line" paragraph="Feel free to contact me. We can discuss our new project" />
                        <form className="mt-[3.6rem] border border-grey px-8 py-12 rounded-[1rem]">
                            <div className="grid grid-cols-12 md:gap-x-[3.2rem] gap-y-[1.6rem] justify-between" >
                                <div className="md:col-span-6 col-span-12">
                                    <div>

                                        <input type="text" name="firstName" id="firstName" className="form-group w-full" placeholder="Enter Your First Name" aria-describedby="firstName" required={true} />
                                    </div>
                                </div>
                                <div className="md:col-span-6 col-span-12">
                                    <input type="text" name="f" id="lastName" className="form-group" placeholder="Enter Your Last Name" aria-describedby="firstName" required={true} />
                                </div>

                                <div className="md:col-span-6 col-span-12">
                                    <input type="text" name="contact" id="contact" className="form-group" placeholder="Enter Your Contact No." aria-describedby="contact" required={true} />
                                </div>

                                <div className="md:col-span-6 col-span-12">
                                    <input type="email" name="email" id="email" className="form-group" placeholder="Enter Your Email" aria-describedby="email" required={true} />
                                </div>
                                <div className="col-span-12">
                                    <textarea className="form-group" name="message" id="message" placeholder="Message" rows={4}></textarea>
                                </div>
                                <p className="text-grey itallic col-span-12">* All fields are required</p>
                                <div className="col-span-6">
                                    <Button varient="primary" className="w-full md:w-auto">Submit</Button>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}