import React from "react";
import { Palette, Shield, Headphones, BarChart } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { featureColors } from "../utils/colors";

const features = [
  {
    icon: Palette,
    title: "Design Moderno",
    description: "Interfaces intuitivas e atraentes que encantam.",
    color: featureColors.design,
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Proteção robusta para seus sistemas e dados.",
    color: featureColors.security,
  },
  {
    icon: Headphones,
    title: "Suporte Contínuo",
    description: "Assistência técnica especializada 24/7.",
    color: featureColors.support,
  },
  {
    icon: BarChart,
    title: "Marketing Digital",
    description: "Estratégias integradas para maximizar seu alcance.",
    color: featureColors.marketing,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a A.E Software?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossos diferenciais que garantem o sucesso do seu projeto
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 100}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div
                  className={`w-12 h-12 ${feature.color.bg} rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${feature.color.hover}`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color.text}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
