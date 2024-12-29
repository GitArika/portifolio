import { Star } from "lucide-react";
interface TestimonialCardProps {
  id: number;
  name: string;
  role: string;
  content: string;
  image: any;
  stars: number;
}

const TestimonialCard = (testimonial: TestimonialCardProps) => {
  return (
    <div
      key={testimonial.id}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 ml-10 mr-10"
    >
      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700">{testimonial.content}</p>
    </div>
  );
};

export default TestimonialCard;
