'use client';
import Banner from "@/components/common/banner";
import { gallery } from "../../../../data";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

interface SingleProjectProps {
    params: {
        id: string; // Define the expected dynamic route parameter
    };
}

const SingleProject: React.FC<SingleProjectProps> = ({ params }) => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the clicked image index
    const { id } = params;

    const items = gallery.find(each => each.id == parseInt(id));
    if (items) {
        return (
            <main>
                <Banner title={items.title} paragraph={items.description} image={`${items.thumbnail}`} />
                <div className="common-padding_small bg-black_extra">
                    {items.images.length > 0 ? (
                        <div className="grid grid-cols-12 gap-8">
                            {items.images.map((each, index) => (
                                <Image
                                    key={index}
                                    src={each}
                                    objectFit="cover"
                                    sizes="100vw"
                                    height={0}
                                    width={0}
                                    alt="Madan Pokhrel"
                                    className="h-[36rem] w-[100%] rounded-[1rem] object-cover lg:col-span-4 md:col-span-6 col-span-12 cursor-pointer hover:grayscale-[40%] transition-all"
                                    onClick={() => {
                                        setCurrentIndex(index); // Set the clicked image index
                                        setOpen(true);
                                    }}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>No Images to display</p>
                    )}

                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={items.images.map((each) => ({ src: each }))}
                        index={currentIndex} // Set the starting index for Lightbox
                    />
                </div>
            </main>
        );
    } else {
        return (
            <main>
                <Banner title="Not Found" paragraph="The Project is not found" />
                <div className="common-padding_small bg-black_extra">
                    <p>Error 404: Not found</p>
                </div>
            </main>
        );
    }
};

export default SingleProject;
