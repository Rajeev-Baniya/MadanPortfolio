
import Experience from "@/components/home/experience";
import { Pricing } from "@/components/home/pricing/pricing";
import Quality from "@/components/home/quality";
import Slider from "@/components/home/slider";
import Testimonial from "@/components/home/testimonial";
import WhatNext from "@/components/home/whatnext";
import Works from "@/components/home/works/works";

export default async function Home() {

  const about = await getData();

  console.log(about);

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

const getData = async () => {
  try {
    const res = await fetch(`${process.env.API}/about/670c8d27c32fc1c457d7a7ec`, {
      next: { revalidate: 1 },
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}: ${res.statusText}`);
    }

    const about = await res.json();
    return about;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};