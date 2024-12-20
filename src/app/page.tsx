
import Experience from "@/components/home/experience";
import { Pricing } from "@/components/home/pricing/pricing";
import Quality from "@/components/home/quality";
import Slider from "@/components/home/slider";
import Testimonial from "@/components/home/testimonial";
import WhatNext from "@/components/home/whatnext";
import Works from "@/components/home/works/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Madan Pokhrel",
  description: "Madan Pokhrel is a professional wedding and events photographer. He is based in Pokhara. He has over 7 yeaars of experience.",
  keywords: "Madan Pokhrel, Madan Pokhrel Photographer, Madan Pokhrel Pokhara, Madan Pokhrel Portfolio, Madan Pokhrel Photography"
}


export default async function Home() {


  return (
    <main>
      <Slider />
      <Quality />
      <Experience />
      <Works />
      <Pricing />
      <Testimonial />
      <WhatNext />
    </main>
  );
}
