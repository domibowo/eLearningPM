import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-blue-400 mb-4">ProductPro Academy</h3>
            <p className="text-gray-300 mb-4">
              Transforming careers through world-class product management education. 
              Learn from industry experts and join the next generation of product leaders.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('why-us')} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('curriculum')} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Curriculum
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('mentors')} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Our Mentors
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Student Success
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('registration')} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Enroll Now
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Career Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Templates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Alumni Network</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Job Board</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@productproacademy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Innovation Street<br />
                  Tech District<br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ProductPro Academy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>

        {/* Certifications and Partnerships */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Trusted by professionals at leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
              <span>Google</span>
              <span>•</span>
              <span>Netflix</span>
              <span>•</span>
              <span>Spotify</span>
              <span>•</span>
              <span>Uber</span>
              <span>•</span>
              <span>Airbnb</span>
              <span>•</span>
              <span>Shopify</span>
              <span>•</span>
              <span>Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}