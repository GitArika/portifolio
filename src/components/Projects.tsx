import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "LeetCode Solutions",
    description: "Solved leet code challenges to stay sharp at DSA.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Typescript", "Javascript"],
    github: "https://github.com/GitArika/leetcode",
    demo: "",
  },
  {
    title: "AORO",
    description: "Gold and AI supported reserve token and wallet.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D2DAQGa2sJ-C4RdJQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1727993448744?e=1734627600&v=beta&t=dEXburFS-M4FD4euJrIQj6fkkuvTYHO_cpIU2iLGbCQ",
    tags: ["React", "Python", "Etherium"],
    github: "",
    demo: "https://aoro.ai",
  },
  {
    title: "Portal Empresas",
    description:
      "Institutional Management of the Albert Einstein Israelite Hospital.",
    image:
      "https://media.licdn.com/dms/image/sync/v2/D4D27AQHeWg8yL7k6Zg/articleshare-shrink_800/articleshare-shrink_800/0/1727833721311?e=1734627600&v=beta&t=IQB8wZEpI2V93JikxGF4ZyK9SyQ9pDZDDsmu-tBs598",
    tags: ["React", "Node.JS", "Single-SPA"],
    github: "",
    demo: "https://portalempresas.einstein.br/login",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          Projects & Collaborations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 ">
                  {project.github != "" && (
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-black"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                  )}
                  {project.demo != "" && (
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-600 hover:text-black"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
