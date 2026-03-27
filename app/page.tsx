import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WorkSection from "./components/WorkSection";
import ExperienceSection from "./components/ExperienceSection";
import StackSection from "./components/StackSection";
import AboutSection from "./components/AboutSection";
import StrategySection from "./components/StrategySection";
import ContactSection from "./components/ContactSection";
import CursorGlow from "./components/CursorGlow";
import PageLoadOverlay from "./components/PageLoadOverlay";
import ScrollProgressBar from "./components/ScrollProgressBar";

function Divider() {
  return <div className="h-px bg-[#1A1A1A]" />;
}

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <PageLoadOverlay />
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <Divider />
        <IntroSection />
        <Divider />
        <WorkSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <StackSection />
        <Divider />
        <AboutSection />
        <Divider />
        <StrategySection />
        <Divider />
        <ContactSection />
      </main>
    </>
  );
}
