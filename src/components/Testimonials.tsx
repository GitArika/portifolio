import React from "react";
import TestimonialsCarousel from "./TestimonialCarousel";
import { ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias de sucesso dos nossos parceiros
          </p>
        </div>

        <TestimonialsCarousel />

        <div className="flex items-center justify-center mt-20">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
