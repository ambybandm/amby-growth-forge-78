
const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200 font-lexend">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-black mb-4">AMBY</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              The missing team behind your growth. We deliver leads, sales, and content creation to accelerate your business.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>📧 hello@amby.co</p>
              <p>📞 +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Lead Generation</li>
              <li>Sales</li>
              <li>Social Media Growth</li>
              <li>Performance Ads</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Contact</li>
              <li>Careers</li>
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
