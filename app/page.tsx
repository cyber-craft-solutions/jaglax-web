import { Copyright, Facebook, Instagram, Logo, Whatsapp } from "@/assets/Icons";
import Header from "@/shared/Header";
import localFont from "next/font/local";
import Image from "next/image";
import main_one from "../assets/images/main_1.jpg";
import main_two from "../assets/images/main_2.jpg";
import main_three from "../assets/images/main_3.jpg";
import main_four from "../assets/images/main_4.jpg";
import main_five from "../assets/images/main_5.jpg";
import main_six from "../assets/images/main_6.jpg";
import Hero from "./components/Hero";
import { fetchHome } from "@/sanity/api/home.api";

const breadley = localFont({ src: "../assets/fonts/breadleysans-regular.ttf" });

export default async function Home() {

  // const home = await fetchHome();
  return (
    <main className="relative">
      <div className="z-10 absolute w-full">
        <Header type="light" />
      </div>
      <Hero />
      <div className="py-10 px-7 flex justify-center">
        <h1
          className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
        >
          Welcome to Koala by Jaglax Homes!
        </h1>
      </div>
      <div className="px-7 pb-10 flex justify-center">
        <p className="text-center">
          We are passionate about offering travellers an unparalleled
          hospitality experience across our luxury villas and apartments in Goa.
          Our services are centred around one fundamental principle: care beyond
          measure.
        </p>
      </div>
      <div className="px-7 pb-[30px] flex flex-col items-center gap-3">
        <Image
          src={main_one}
          alt="main_one"
          className="object-cover w-[300px] h-auto"
        />
        <Image
          src={main_two}
          alt="main_one"
          className="object-cover w-[300px] h-auto"
        />
        <Image
          src={main_three}
          width={300}
          height={300}
          alt="main_one"
          className="object-cover"
        />
      </div>
      <div className="px-7 pb-10 flex justify-center">
        <p className="text-center">
          Why the name Koala, you may ask? Known for its leisurely lifestyle,
          the koala spends over 20 hours a day in a state of blissful slumber.
          It exemplifies the epitome of tranquillity and embodies the true
          spirit of unwinding. Our aim is to create an environment where our
          guests can pause, rejuvenate, and embrace the art of doing absolutely
          nothing while our team facilities a restful vacation.
        </p>
      </div>
      <div className="px-7 pb-10 flex justify-center">
        <p className="text-center">
          We want our guests to experience the same sense of calm and relaxation
          as our beloved koalas, where worries are left at the doorstep and time
          slows down to a gentle pace. Stay with us and discover the true
          meaning of blissful escapism.
        </p>
      </div>
      <div className="px-7 pb-[30px] flex flex-col items-center gap-3">
        <Image
          src={main_four}
          width={300}
          height={300}
          alt="main_one"
          className="object-cover"
        />
        <Image
          src={main_five}
          width={300}
          height={300}
          alt="main_one"
          className="object-cover"
        />
        <Image
          src={main_six}
          width={300}
          height={300}
          alt="main_one"
          className="object-cover"
        />
      </div>
      <footer className="px-7 pb-[30px] flex flex-col items-center">
        <span className="flex gap-5 pb-3">
          <Whatsapp />
          <Instagram />
          <Facebook />
        </span>
        <span className="flex items-center">
          <p className="pr-2">2023</p>
          <Copyright />
          <p className="pl-2">by Jaglax Homes T&C</p>
        </span>
      </footer>
    </main>
  );
}
