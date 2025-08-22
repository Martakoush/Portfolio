import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen px-12 flex-col bg-[#121212]">
        <Navbar></Navbar>
      <div className="container mt-24 mx-auto px-12 py-04">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <ProjectsSection></ProjectsSection>
        <EmailSection></EmailSection>
      </div>
      <Footer></Footer>
    </main>
  ); 
}
