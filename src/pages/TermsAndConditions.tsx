
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-lexend">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-black"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <img 
              src="/lovable-uploads/e1768634-31db-4374-a138-5b36403ead96.png" 
              alt="Amby" 
              className="h-8 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Amby's services, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">2. Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Amby provides digital marketing services including but not limited to:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Lead generation campaigns</li>
                <li>• Revenue generation strategies</li>
                <li>• Social media growth management</li>
                <li>• Performance advertising</li>
                <li>• Content creation and strategy</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients agree to:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Provide accurate and complete information necessary for service delivery</li>
                <li>• Respond to requests for information within reasonable timeframes</li>
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Make payments according to agreed terms</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Payment terms are specified in individual service agreements. Generally, payments are due 
                within 30 days of invoice date. Late payments may incur additional charges. 
                Services may be suspended for accounts with overdue balances.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All creative work, strategies, and materials developed by Amby remain our intellectual property 
                unless otherwise specified in writing. Clients receive a license to use deliverables for their 
                business purposes.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">6. Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed">
                We maintain strict confidentiality regarding all client information and business data. 
                We will not disclose confidential information to third parties without written consent, 
                except as required by law.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">7. Performance and Results</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to deliver exceptional results, marketing outcomes can be influenced by 
                various factors beyond our control. We cannot guarantee specific results but commit to 
                using best practices and continuous optimization.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                Either party may terminate services with 30 days written notice. Clients remain 
                responsible for payment of all services rendered prior to termination. 
                Some services may have specific termination clauses as outlined in individual agreements.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Amby's liability is limited to the amount paid for services in the 12 months preceding 
                any claim. We are not liable for indirect, consequential, or punitive damages.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">10. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms are governed by the laws of India. Any disputes will be resolved through 
                binding arbitration in Hyderabad, India.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions regarding these terms, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: teja@ambymc.com</p>
                <p>Phone: +91 8333012936</p>
                <p>Address: Rajapushpa, Financial District, Hyderabad, 500032, India</p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center bg-black text-white p-12 rounded-2xl mt-16">
              <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
              <p className="text-gray-300 mb-6">
                We're here to help clarify any questions you may have
              </p>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => window.open('mailto:teja@ambymc.com?subject=Terms and Conditions Inquiry', '_blank')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
