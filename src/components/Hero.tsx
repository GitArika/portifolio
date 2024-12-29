import React from "react";
import { ArrowRight } from "lucide-react";
import background from "../assets/background.jpeg";
import { AnimatedSection } from "./AnimatedSection";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transformamos suas ideias em soluções digitais personalizadas
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={200}>
              <p className="text-xl text-gray-600">
                Tecnologia de ponta, design moderno e suporte contínuo para seu
                sucesso online.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={400}>
              <button
                onClick={() => {
                  window.location.href =
                    "https://wa.me/5511949880392?text=Olá! Estou visitando seu website e gostaria de saber mais sobre os serviços.";
                }}
                className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:gap-4"
              >
                Fale com um Especialista
                <ArrowRight className="transition-transform duration-300" />
              </button>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="right" delay={300}>
            <div className="relative">
              <img
                src={background}
                alt="Equipe de desenvolvimento"
                className="rounded-lg shadow-2xl transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
