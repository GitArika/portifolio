import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import carlos from "../assets/carlos-silva.jpeg";
import ana from "../assets/ana-santos.jpeg";
import pedro from "../assets/pedro-costa.jpeg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: any;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "CEO, TechCorp",
    content:
      "A A.E Software transformou completamente nossa presença digital. O novo site aumentou nossas conversões em 150%.",
    image: carlos,
    stars: 5,
  },
  {
    id: 2,
    name: "Ana Santos",
    role: "Diretora de Marketing, Inovare",
    content:
      "Excelente trabalho na integração dos nossos sistemas. A equipe é muito profissional e dedicada.",
    image: ana,
    stars: 5,
  },
  {
    id: 3,
    name: "Pedro Costa",
    role: "CTO, StartupX",
    content:
      "A consultoria em infraestrutura nos ajudou a escalar com segurança. Recomendo fortemente!",
    image: pedro,
    stars: 5,
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Reset auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 5000);
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 5000);
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-red-600" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
