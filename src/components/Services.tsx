import React from "react";
import { Globe, Puzzle, Cloud, Lightbulb } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { serviceColors } from "../utils/colors";

const services = [
  {
    icon: Globe,
    title: "Construção de Websites",
    description:
      "Criamos sites responsivos, otimizados e com design exclusivo.",
    color: serviceColors.website,
  },
  {
    icon: Puzzle,
    title: "Integração de Sistemas",
    description:
      "Unificamos plataformas e migramos os dados para uma experiência fluida.",
    color: serviceColors.integration,
  },
  {
    icon: Cloud,
    title: "Infraestrutura em Nuvem",
    description:
      "Implemente soluções escaláveis, seguras e eficientes em custo.",
    color: serviceColors.cloud,
  },
  {
    icon: Lightbulb,
    title: "Consultoria de Tecnologia",
    description: "Estratégias personalizadas para transformar seu negócio.",
    color: serviceColors.consulting,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para impulsionar sua presença
              digital
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 100}>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
                <div
                  className={`w-12 h-12 ${service.color.bg} rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${service.color.hover}`}
                >
                  <service.icon className={`w-6 h-6 ${service.color.text}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
