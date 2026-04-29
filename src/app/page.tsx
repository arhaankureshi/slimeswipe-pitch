import OrbField from "./components/OrbFieldClient";
import NavRail from "./components/NavRail";
import KeyboardNav from "./components/KeyboardNav";
import FloatingNav from "./components/FloatingNav";
import {
  Slide1Title,
  Slide2Problem,
  Slide3WhatWeDo,
  Slide4How,
  Slide5Edge,
  Slide6Insight,
} from "./components/slides/Slides1to7";
import {
  Slide8Traction,
  Slide11Giving,
  Slide12Resilience,
  Slide13Team,
  Slide14Ask,
} from "./components/slides/Slides8to14";
import {
  SlideTestimonials,
  SlideSales,
  SlideSalesProof,
  SlideProjections,
  SlideMarketing,
  SlideNumbers,
  SlideProduction,
} from "./components/slides/NewSlides";

export default function Home() {
  return (
    <>
      <OrbField />
      <NavRail />
      <KeyboardNav />
      <FloatingNav />
      <main className="relative z-10">
        {/* Intro & Mission */}
        <Slide1Title />
        <Slide2Problem />
        <Slide13Team />
        <Slide3WhatWeDo />
        <Slide4How />
        {/* Sales & Finance */}
        <SlideSalesProof />
        <Slide8Traction />
        <SlideProjections />
        <SlideNumbers />
        {/* Tech & Resilience */}
        <Slide12Resilience />
        {/* Marketing & Social Responsibility */}
        <SlideMarketing />
        <Slide11Giving />
        {/* Production */}
        <SlideProduction />
        {/* Supporting Proof */}
        <Slide6Insight />
        <SlideTestimonials />
        <Slide5Edge />
        {/* Close */}
        <SlideSales />
        <Slide14Ask />
      </main>
    </>
  );
}
