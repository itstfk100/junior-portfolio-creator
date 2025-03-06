
import {
  Code,
  Database,
  Globe,
  Layout,
  Terminal,
  Binary,
  Laptop,
  Server,
  Cpu,
  Cloud
} from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: <Layout className="w-8 h-8 text-primary" />,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    bgGlow: "from-blue-500/20 to-purple-500/20"
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8 text-primary" />,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    bgGlow: "from-green-500/20 to-emerald-500/20"
  },
  {
    category: "Languages",
    icon: <Code className="w-8 h-8 text-primary" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
    bgGlow: "from-yellow-500/20 to-orange-500/20"
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8 text-primary" />,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    bgGlow: "from-red-500/20 to-pink-500/20"
  },
  {
    category: "Tools",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    skills: ["Git", "Docker", "AWS", "Linux"],
    bgGlow: "from-purple-500/20 to-indigo-500/20"
  },
  {
    category: "Other",
    icon: <Cloud className="w-8 h-8 text-primary" />,
    skills: ["REST APIs", "GraphQL", "CI/CD", "Agile"],
    bgGlow: "from-teal-500/20 to-cyan-500/20"
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="section-padding min-h-screen animate-fade-in [animation-delay:300ms]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Laptop className="w-6 h-6 text-primary neon-glow" />
          <h2 className="text-3xl font-bold neon-glow">Tech Stack</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.category}
              className="card-gradient p-6 rounded-xl relative overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-primary/20"
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgGlow} opacity-50 blur-xl transition-all duration-500 animate-pulse`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  {tech.icon}
                  <h3 className="text-lg font-semibold text-primary">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-background/50 text-sm border border-primary/20 shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
