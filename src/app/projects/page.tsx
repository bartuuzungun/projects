import Image from "next/image";
import Link from "next/link";

// Bu veriyi daha sonra bir API'den veya CMS'den çekebilirsiniz
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.",
    image: "/image.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A real-time task management application with team collaboration features.",
    image: "/image.png",
    tags: ["React", "Firebase", "Material-UI", "TypeScript"],
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "An AI-powered chat application using OpenAI's GPT API.",
    image: "/image.png",
    tags: ["Python", "FastAPI", "React", "OpenAI"],
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.",
    image: "/image.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A real-time task management application with team collaboration features.",
    image: "/image.png",
    tags: ["React", "Firebase", "Material-UI", "TypeScript"],
  },
  {
    id: 6,
    title: "AI Chat Application",
    description: "An AI-powered chat application using OpenAI's GPT API.",
    image: "/image.png",
    tags: ["Python", "FastAPI", "React", "OpenAI"],
  },

  // Daha fazla proje ekleyebilirsiniz
];

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function Projects() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I have worked on. Each project
          represents a unique challenge and solution.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
