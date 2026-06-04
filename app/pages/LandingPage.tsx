import HeroSection from "../components/HeroSection";
import InstallationSection from "../components/InstallationSection";
import Footer from "../components/Footer";
import SectionDocsPreview from "../components/SectionDocsPreview/SectionDocsPreview";
import SessionManagementSection from "app/components/SessionManagementSection/SessionManagementSection";
import TokenBudgetingSection from "app/components/TokenBudgetingSection/TokenBudgetingSection";
import PromptBuilderSection from "app/components/PromptBuilderSection/PromptBuilderSection";
import PluggableLlMsSection from "app/components/PluggableLlMsSection/PluggableLlMsSection";
import HowItWorksSection from "../components/HowItWorksSection/HowItWorksSection";
import HeaderTopNavBar from "app/components/HeaderTopNavBar";

export default function LandingPage() {
  return (
    <>
      <HeaderTopNavBar />

      <main className="pt-32 relative">
        <HeroSection />
        <InstallationSection />
        <HowItWorksSection />
        <SessionManagementSection />
        <TokenBudgetingSection />
        <PromptBuilderSection />
        <PluggableLlMsSection />
        <SectionDocsPreview />
      </main>

      <Footer />
    </>
  );
}
