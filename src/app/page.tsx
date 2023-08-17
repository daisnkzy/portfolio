"use client";
import About from "@/components/layouts/About";
import Banner from "@/components/layouts/Banner";
import Footer from "@/components/layouts/Footer";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/layouts/Navbar";
import Projects from "@/components/layouts/Projects";
import RightSide from "@/components/RightSide";
import TechStack from "@/components/layouts/TechStack";
import Archive from "@/components/layouts/Archive";
import Contact from "@/components/layouts/Contact";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-x-hidden overflow-y-scroll scroll-smooth bg-background text-dark ">
      <Navbar />
      <div className=" h-[88vh] w-full items-center justify-between gap-20 md:flex">
        <LeftSide />
        <article className="mx-auto h-[88vh] w-full p-4">
          <Banner />
          <About />
          <TechStack />
          <Projects />
          <Archive />
          <Contact />
          <Footer />
        </article>
        <RightSide />
      </div>
    </main>
  );
}
