
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import { Button } from "./commons/Button";
import { useAuth } from "../contexts/AuthContext";

interface HeaderProps {
  onNavigateToLogin?: () => void;
}

export function Header({ onNavigateToLogin }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleAuthAction = async () => {
    if (isAuthenticated) {
      try {
        await logout();
      } catch (error) {
        console.error('Logout error:', error);
      }
    } else if (onNavigateToLogin) {
      onNavigateToLogin();
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-blue-700 font-bold text-xl">ProductPro Academy</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-blue-700 transition-colors">
                Why Us
              </button>
              <button onClick={() => scrollToSection('curriculum')} className="text-gray-700 hover:text-blue-700 transition-colors">
                Curriculum
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-700 transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('mentors')} className="text-gray-700 hover:text-blue-700 transition-colors">
                Mentors
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-700 transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-700 transition-colors">
                Contact
              </button>
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{user?.name}</span>
                  </div>
                  <Button
                    onClick={handleAuthAction} 
                    variant="outline"
                    className="border-blue-700 text-blue-700 hover:bg-blue-50"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Button 
                    onClick={handleAuthAction}
                    variant="outline"
                    className="border-blue-700 text-blue-700 hover:bg-blue-50"
                  >
                    Login
                  </Button>
                  <Button onClick={() => scrollToSection('registration')} className="bg-blue-700 hover:bg-blue-800">
                    Register Now
                  </Button>
                </>
              )}
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {isAuthenticated && (
              <div className="px-3 py-2 mb-2 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 text-gray-700">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{user?.name}</span>
                </div>
              </div>
            )}
            <button onClick={() => scrollToSection('why-us')} className="block px-3 py-2 text-gray-700 hover:text-blue-700 w-full text-left">
              Why Us
            </button>
            <button onClick={() => scrollToSection('curriculum')} className="block px-3 py-2 text-gray-700 hover:text-blue-700 w-full text-left">
              Curriculum
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-gray-700 hover:text-blue-700 w-full text-left">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('mentors')} className="block px-3 py-2 text-gray-700 hover:text-blue-700 w-full text-left">
              Mentors
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-gray-700 hover:text-blue-700 w-full text-left">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-700 w-full text-left">
              Contact
            </button>
            <div className="px-3 py-2 space-y-2">
              {isAuthenticated ? (
                <Button 
                  onClick={handleAuthAction} 
                  variant="outline"
                  className="w-full border-blue-700 text-blue-700 hover:bg-blue-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <>
                  <Button 
                    onClick={handleAuthAction}
                    variant="outline"
                    className="w-full border-blue-700 text-blue-700 hover:bg-blue-50"
                  >
                    Login
                  </Button>
                  <Button onClick={() => scrollToSection('registration')} className="bg-blue-700 hover:bg-blue-800 w-full">
                    Register Now
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}