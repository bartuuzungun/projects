import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  longDescription: string;
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern ve kullanıcı dostu bir e-ticaret platformu",
    image: "/image.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    longDescription:
      "Bu e-ticaret platformu, modern web teknolojileri kullanılarak geliştirilmiş kapsamlı bir alışveriş deneyimi sunuyor. Kullanıcılar ürünleri kolayca arayabilir, filtreleyebilir ve satın alabilirler.",
    features: [
      "Gelişmiş ürün arama ve filtreleme",
      "Güvenli ödeme işlemleri",
      "Kullanıcı hesap yönetimi",
      "Sipariş takibi",
      "Admin paneli",
    ],
    demoUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/username/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Ekip çalışması için tasarlanmış görev yönetim uygulaması",
    image: "/image.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.IO"],
    longDescription:
      "Bu görev yönetim uygulaması, ekiplerin projelerini ve görevlerini etkili bir şekilde yönetmelerini sağlar. Gerçek zamanlı işbirliği özellikleri ile ekip üyeleri anlık olarak güncellemeleri görebilir.",
    features: [
      "Sürükle-bırak görev yönetimi",
      "Gerçek zamanlı bildirimler",
      "Görev atamaları ve takibi",
      "Proje zaman çizelgeleri",
      "Dosya paylaşımı",
    ],
    demoUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/username/taskmanager",
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description: "Yapay zeka destekli müşteri hizmetleri chatbot'u",
    image: "/image.png",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
    longDescription:
      "Bu AI chat assistant, doğal dil işleme teknolojilerini kullanarak müşterilere 7/24 destek sağlar. Makine öğrenimi modelleri sayesinde kullanıcı sorularını anlayıp uygun yanıtları verebilir.",
    features: [
      "Doğal dil işleme",
      "Otomatik öğrenme ve iyileştirme",
      "Çoklu dil desteği",
      "Özelleştirilebilir yanıtlar",
      "Analitik dashboard",
    ],
    demoUrl: "https://aichat-demo.com",
    githubUrl: "https://github.com/username/aichat",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Modern ve kullanıcı dostu bir e-ticaret platformu",
    image: "/image.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    longDescription:
      "Bu e-ticaret platformu, modern web teknolojileri kullanılarak geliştirilmiş kapsamlı bir alışveriş deneyimi sunuyor. Kullanıcılar ürünleri kolayca arayabilir, filtreleyebilir ve satın alabilirler.",
    features: [
      "Gelişmiş ürün arama ve filtreleme",
      "Güvenli ödeme işlemleri",
      "Kullanıcı hesap yönetimi",
      "Sipariş takibi",
      "Admin paneli",
    ],
    demoUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/username/ecommerce",
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Ekip çalışması için tasarlanmış görev yönetim uygulaması",
    image: "/image.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.IO"],
    longDescription:
      "Bu görev yönetim uygulaması, ekiplerin projelerini ve görevlerini etkili bir şekilde yönetmelerini sağlar. Gerçek zamanlı işbirliği özellikleri ile ekip üyeleri anlık olarak güncellemeleri görebilir.",
    features: [
      "Sürükle-bırak görev yönetimi",
      "Gerçek zamanlı bildirimler",
      "Görev atamaları ve takibi",
      "Proje zaman çizelgeleri",
      "Dosya paylaşımı",
    ],
    demoUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/username/taskmanager",
  },
  {
    id: 6,
    title: "AI Chat Assistant",
    description: "Yapay zeka destekli müşteri hizmetleri chatbot'u",
    image: "/image.png",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
    longDescription:
      "Bu AI chat assistant, doğal dil işleme teknolojilerini kullanarak müşterilere 7/24 destek sağlar. Makine öğrenimi modelleri sayesinde kullanıcı sorularını anlayıp uygun yanıtları verebilir.",
    features: [
      "Doğal dil işleme",
      "Otomatik öğrenme ve iyileştirme",
      "Çoklu dil desteği",
      "Özelleştirilebilir yanıtlar",
      "Analitik dashboard",
    ],
    demoUrl: "https://aichat-demo.com",
    githubUrl: "https://github.com/username/aichat",
  },
];

interface Props {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="space-y-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Geri Dön
        </Link>

        {/* Project Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{project.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {project.description}
          </p>
        </header>

        {/* Project Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Technologies */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Teknolojiler</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Long Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Proje Detayı</h2>
          <p className="text-gray-600 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Özellikler</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Demo&apos;yu Görüntüle
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              GitHub&apos;da İncele
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
