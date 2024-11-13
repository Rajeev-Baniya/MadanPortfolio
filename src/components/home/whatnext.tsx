import Title from "../common/title";
import Button from "../ui/button";

export default function WhatNext() {
    return (
        <section className="common-padding_small text-center bg-black_extra">
            <div className="mb-[5rem]">
                <Title title="What Next" paragraph="Interested in working with me?" />
            </div>
            <p className="text-grey mb-[5rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem amet reiciendis saepe eos quos itaque quibusdam perspiciatis voluptatibus voluptatum numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit veniam blanditiis magnam magni eius ipsam officia quo nam molestias</p>
            <div className="flex gap-[2.8rem] justify-center items-center">
                <Button varient="secondary"> Read More</Button>
                <Button varient="primary"> Let&#39;s work together</Button>

            </div>
        </section>
    )
}