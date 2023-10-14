import Header from "@/shared/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Footer from "@/shared/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header type="light" />
      <Hero />
      <Intro />
      <Footer />
    </main>
  );
}
