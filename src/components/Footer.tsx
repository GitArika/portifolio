import React from "react";
import { Mail, Phone, MapPin, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">A.E Software</h3>
            <p className="mb-6">
              Transformando ideias em soluções digitais inovadoras para
              impulsionar seu negócio.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/CodeWithAriel"
                aria-label="Twitter"
                className="hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://br.linkedin.com/in/ariel-evangelista"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>Construção de Websites</li>
              <li>Integração de Sistemas</li>
              <li>Infraestrutura em Nuvem</li>
              <li>Consultoria de Tecnologia</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gray-400" />
                <span>(11) 94988-0392</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gray-400" />
                <span>ariel.se@icloud.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-gray-400" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} A.E Software. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
