import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 pb-1">
            Ariel Evangelista
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-gray-300">
            Software Engineer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Especialista em tecnologias como Python, React, Angular e Node.js.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/GitArika"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://br.linkedin.com/in/ariel-evangelista"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ariel.se@icloud.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </div>
  );
}
