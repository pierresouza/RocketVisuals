"use client";

import "aos/dist/aos.css";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Portfolio from "./components/Portfolio";
import Differentials from "./components/Differentials";
import Services from "./components/Services";
import ServicesPackages from "./components/ServicesPackages";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Problem />
      <Solution />
      <Portfolio />
      <Differentials />
      <Services />
      <ServicesPackages />
      <Process />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
