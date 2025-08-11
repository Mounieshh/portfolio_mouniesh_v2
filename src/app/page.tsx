
import { ContactForm } from "@/components/contact-form";
import AboutSection from "@/sections/about";
import DummySection from "@/sections/dummy";
import FooterSection from "@/sections/footer";
import HeroSection from "@/sections/hero";
import ProjectSection from "@/sections/project";
import SkillsSection from "@/sections/skills";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <SkillsSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactForm/>
      <DummySection/>
      <FooterSection/>
    </div>
  );
}
