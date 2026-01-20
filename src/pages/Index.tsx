import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ToolsSection from "@/components/ToolsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CasesSection from "@/components/CasesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ToolsSection />
        <BenefitsSection />
        <CasesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
