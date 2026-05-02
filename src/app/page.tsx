import AboutSection from "@/sections/about";
import FooterSection from "@/sections/footer";
import HeroSection from "@/sections/hero";
import ProjectSection from "@/sections/project";
import SkillsSection from "@/sections/skills";
import ContactSection from "@/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
