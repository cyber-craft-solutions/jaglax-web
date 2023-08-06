import { Copyright, Facebook, Instagram, Logo, Whatsapp } from "@/assets/Icons";
import Header from "@/shared/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";


export default function Home() {
  return (
    <main className="relative">
      <div className="z-10 absolute w-full">
        <Header type="light" />
      </div>
      <Hero />
      <Intro />
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
