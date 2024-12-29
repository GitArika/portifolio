import React from "react";
import { Menu, X } from "lucide-react";
import logo from "/src/assets/logo.png"; // Importing the logo file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="A.E Software Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Portfólio
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="https://wa.me/5511949880392?text=Olá! Estou visitando seu website e gostaria de saber mais sobre os serviços."
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Fale com um Especialista
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={handleMenuClick}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Portfólio
              </a>
              <a
                href="#testimonials"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Depoimentos
              </a>

              <a
                href="https://wa.me/5511949880392?text=Olá! Estou visitando seu website e gostaria de saber mais sobre os serviços."
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Fale com um Especialista
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
