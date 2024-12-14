import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SuccessMessage from "./SuccessMessage";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (data: FormData) => {
    // Here you would typically send the data to your backend
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <div className="transition-all duration-500 ease-in-out">
            {isSubmitted ? (
              <SuccessMessage />
            ) : (
              <ContactForm onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
