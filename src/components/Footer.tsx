
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const scrollToCTA = () => {
    const ctaSection = document.querySelector('section:has(h2:contains("Ready to accelerate"))') || document.querySelector('[class*="bg-black"]');
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToCaseStudies = () => {
    const caseStudiesSection = document.querySelector('section:has(h2:contains("Success with Amby"))') || document.querySelector('[class*="bg-gray-100"]');
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-200 font-lexend">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-black mb-4">AMBY</h3>
            <div className="space-y-2 text-gray-600">
              <p>📧 teja@ambymc.com</p>
              <p>📞 +91 8333012936</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li 
                className="hover:text-black cursor-pointer"
                onClick={() => handleNavigation('/lead-generation')}
              >
                Lead generation
              </li>
              <li 
                className="hover:text-black cursor-pointer"
                onClick={() => handleNavigation('/revenue-generation')}
              >
                Revenue generation
              </li>
              <li 
                className="hover:text-black cursor-pointer"
                onClick={() => handleNavigation('/social-media-growth')}
              >
                Social media growth
              </li>
              <li 
                className="hover:text-black cursor-pointer"
                onClick={() => handleNavigation('/winning-ad-creatives')}
              >
                Winning ad creatives
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li 
                className="hover:text-black cursor-pointer"
                onClick={() => handleNavigation('/about-us')}
              >
                About us
              </li>
              <li 
                className="text-gray-600 hover:text-black cursor-pointer"
                onClick={scrollToCaseStudies}
              >
                Case studies
              </li>
              <li 
                className="text-gray-600 hover:text-black cursor-pointer"
                onClick={scrollToCTA}
              >
                Contact us
              </li>
              <li 
                className="hover:text-black cursor-pointer"
                onClick={() => handleNavigation('/careers')}
              >
                Careers
              </li>
              <li 
                className="hover:text-black cursor-pointer"
                onClick={() => handleNavigation('/terms-and-conditions')}
              >
                Terms and conditions
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 AMBY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
