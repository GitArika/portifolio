import React from "react";
import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { tagColors } from "../utils/colors";
import bemEstar from "../assets/bem-estar-fitness.png";
import aoro from "../assets/aoro-ai.png";
import portalEmpresas from "../assets/portal-empresas.png";

const projects = [
  {
    title: "Bem Estar Fitness",
    description: "Transforme seu corpo, mente e vida em Itapetinga - Bahia.",
    image: bemEstar,
    tags: [
      { name: "Landing Page", color: tagColors.cloud },
      { name: "Marketing Digital", color: tagColors.cloud },
      { name: "SEO", color: tagColors.cloud },
    ],
    url: "https://academiasaudefitness.vercel.app",
  },
  {
    title: "Aoro AI",
    description: "Token de reserva e wallet suportados por ouro e IA.",
    image: aoro,
    tags: [
      { name: "Crypto Wallet", color: tagColors.analytics },
      { name: "Ethereum", color: tagColors.analytics },
      { name: "IA", color: tagColors.analytics },
    ],
    url: "https://aoro.ai/pt-BR",
  },
  {
    title: "Portal Empresas",
    description:
      "Todo o cuidado do Hospital Albert Einstein para a sua empresa.",
    image: portalEmpresas,
    tags: [
      { name: "Mobile", color: tagColors.gps },
      { name: "React Native", color: tagColors.gps },
      { name: "GPS", color: tagColors.gps },
    ],
    url: "https://portalempresas.einstein.br/login",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Portfólio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos nossos projetos de sucesso
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 100}>
              <div
                onClick={() => {
                  window.location.href = project.url;
                }}
                className="cursor-pointer group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600/0 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ExternalLink className="w-8 h-8 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color.bg} ${tag.color.text}`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
