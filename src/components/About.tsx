import React from "react";
import {
  Code2,
  Palette,
  Globe2,
  ChevronRightSquare,
  TestTube2,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Code2 className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">
              Crafting maintainable, scalable, and efficient code for long-term
              success.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <Palette className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
            <p className="text-gray-600">
              Designing beautiful, user-friendly interfaces that enhance
              experiences.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <Globe2 className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">
              Developing high-performing, scalable applications for global
              audiences.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <ChevronRightSquare className="w-12 h-12 text-black-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">DevOps</h3>
            <p className="text-gray-600">
              Streamlining development with automation for faster, smoother
              delivery.
            </p>
          </div>{" "}
          <div className="p-6 bg-gray-50 rounded-lg">
            <TestTube2 className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Test automation</h3>
            <p className="text-gray-600">
              Boosting quality with efficient, error-reducing automated testing.
            </p>
          </div>{" "}
          <div className="p-6 bg-gray-50 rounded-lg">
            <ShieldCheck className="w-12 h-12 text-amber-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-600">
              Ensuring robust, secure applications to protect users and data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
