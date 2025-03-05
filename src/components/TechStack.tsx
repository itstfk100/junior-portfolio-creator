
import { Binary, Code, Database, Globe, Layout, Terminal } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Languages",
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    category: "Tools",
    icon: <Binary className="w-6 h-6 text-primary" />,
    skills: ["Git", "Docker", "AWS", "Linux"],
  },
  {
    category: "Other",
    icon: <Globe className="w-6 h-6 text-primary" />,
    skills: ["REST APIs", "GraphQL", "CI/CD", "Agile"],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="section-padding min-h-screen animate-fade-in [animation-delay:300ms]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Code className="w-6 h-6 text-primary neon-glow" />
          <h2 className="text-3xl font-bold neon-glow">Tech Stack</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div key={tech.category} className="card-gradient p-6 rounded-xl animate-hover">
              <div className="flex items-center gap-3 mb-4">
                {tech.icon}
                <h3 className="text-lg font-semibold text-primary">{tech.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-background/50 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
