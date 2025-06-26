
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LeadGeneration from "./pages/LeadGeneration";
import RevenueGeneration from "./pages/RevenueGeneration";
import SocialMediaGrowth from "./pages/SocialMediaGrowth";
import WinningAdCreatives from "./pages/WinningAdCreatives";
import AboutUsPage from "./pages/AboutUs";
import OurMission from "./pages/OurMission";
import OurCoreValues from "./pages/OurCoreValues";
import Careers from "./pages/Careers";
import TermsAndConditions from "./pages/TermsAndConditions";
import MultiLanguageCampaign from "./pages/MultiLanguageCampaign";
import EducationalWebinarOptimization from "./pages/EducationalWebinarOptimization";
import HighConvertingCopywriting from "./pages/HighConvertingCopywriting";
import ConversionFocusedWebsiteDesign from "./pages/ConversionFocusedWebsiteDesign";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lead-generation" element={<LeadGeneration />} />
          <Route path="/revenue-generation" element={<RevenueGeneration />} />
          <Route path="/social-media-growth" element={<SocialMediaGrowth />} />
          <Route path="/winning-ad-creatives" element={<WinningAdCreatives />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/our-core-values" element={<OurCoreValues />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/case-study/multi-language-campaign" element={<MultiLanguageCampaign />} />
          <Route path="/case-study/educational-webinar-optimization" element={<EducationalWebinarOptimization />} />
          <Route path="/case-study/high-converting-copywriting" element={<HighConvertingCopywriting />} />
          <Route path="/case-study/conversion-focused-website-design" element={<ConversionFocusedWebsiteDesign />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
