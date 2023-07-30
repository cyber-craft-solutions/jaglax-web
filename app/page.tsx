import { Logo } from "@/assets/Icons";
import Header from "@/shared/Header";

export default function Home() {
  return (
    <main className="relative">
      <div className="z-10 absolute w-full">
        <Header type="light" />
      </div>
      <div className="w-full height-full">
        <div className="overlay"></div>
        <video autoPlay loop muted>
          <source src="/home-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="z-10 relative flex justify-center items-center h-screen">
        <Logo />
      </div>
    </main>
  );
}
