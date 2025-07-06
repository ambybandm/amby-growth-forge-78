
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const scrollToServices = () => {
    // Find the Services section by looking for the heading text
    const headings = document.querySelectorAll('h2');
    let servicesSection = null;
    
    headings.forEach(heading => {
      if (heading.textContent?.toLowerCase().includes('our services')) {
        servicesSection = heading.closest('section');
      }
    });
    
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback - scroll to approximately where services should be
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  const scrollToCTA = () => {
    // Find the CTA section by looking for the heading text
    const headings = document.querySelectorAll('h2');
    let ctaSection = null;
    
    headings.forEach(heading => {
      if (heading.textContent?.toLowerCase().includes('ready to accelerate')) {
        ctaSection = heading.closest('section');
      }
    });
    
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback - scroll to near bottom of page
      window.scrollTo({
        top: document.documentElement.scrollHeight - window.innerHeight - 200,
        behavior: 'smooth'
      });
    }
  };

  const scrollToCaseStudies = () => {
    const headings = document.querySelectorAll('h2');
    let caseStudiesSection = null;
    
    headings.forEach(heading => {
      if (heading.textContent?.toLowerCase().includes('success with amby')) {
        caseStudiesSection = heading.closest('section');
      }
    });
    
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-200 font-lexend">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-black mb-4">AMBY</h3>
            <div className="space-y-2 text-gray-600 mb-6">
              <p>📧 teja@ambymc.com</p>
              <p>📞 +91 8333012936</p>
            </div>
            
            {/* Social Media Icons */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">Follow us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <FaYoutube size={24} />
                </a>
              </div>
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
                onClick={scrollToServices}
              >
                Our services
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li 
                className="text-gray-600 hover:text-black cursor-pointer"
                onClick={scrollToCaseStudies}
              >
                Case studies
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
