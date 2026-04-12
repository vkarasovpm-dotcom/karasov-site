import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PainPointsSection from "./components/PainPointsSection";
import WorkSection from "./components/WorkSection";
import ExperienceSection from "./components/ExperienceSection";
import StackSection from "./components/StackSection";
import ProcessSection from "./components/ProcessSection";
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
        <PainPointsSection />
        <Divider />
        <WorkSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <StackSection />
        <Divider />
        <ProcessSection />
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
