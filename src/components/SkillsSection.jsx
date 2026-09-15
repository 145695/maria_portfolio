import { useState, useEffect, useRef } from "react";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Javascript", level: 95, category: "frontend" },
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 95, category: "frontend" },
  { name: "Tailwind", level: 95, category: "frontend" },
  { name: "Three.js", level: 95, category: "frontend" },
  { name: "Node.js", level: 95, category: "backend" },
  { name: "Express.js", level: 95, category: "backend" },
  { name: "MongoDB", level: 95, category: "backend" },
  { name: "MySQL", level: 95, category: "backend" },
  { name: "Git", level: 95, category: "version control" },
  { name: "GitHub", level: 95, category: "version control" },
  { name: "Figma", level: 95, category: "design" },
];

const categories = ["frontend", "backend", "version control", "design"];

const skillIcons = {
  "HTML/CSS": "html5",
  "Javascript": "javascript",
  "React": "react",
  "Next.js": "nextdotjs",
  "Tailwind": "tailwindcss",
  "Three.js": "threedotjs",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  "MongoDB": "mongodb",
  "MySQL": "mysql",
  "Git": "git",
  "GitHub": "github",
  "Figma": "figma",
};

const SkillRing = ({ name, level }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const iconSlug = skillIcons[name];

  useEffect(() => {
    const timeout = setTimeout(() => setAnimatedLevel(level), 50);
    return () => clearTimeout(timeout);
  }, [level]);

  const offset = circumference - (animatedLevel / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg width="100" height="100" className="-rotate-90">
          <circle
            cx="50" cy="50" r={radius}
            stroke="currentColor" strokeWidth="8" fill="none"
            className="text-primary-foreground/10"
          />
          <circle
            cx="50" cy="50" r={radius}
            stroke="currentColor" strokeWidth="8" fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-foreground transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {iconSlug && (
            <img
              src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${iconSlug}.svg`}
              alt={name}
              className="h-8 w-8 dark:invert"
            />
          )}
        </div>
      </div>
      <span className="text-muted-foreground text-sm text-center">{name}</span>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative px-4 bg-second">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* category buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          style={{ pointerEvents: "auto" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full capitalize text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 text-muted-foreground hover:bg-primary/20"
              }`}
              style={{ pointerEvents: "auto" }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* skill rings for active category */}
        <div className="flex flex-wrap justify-center gap-8 min-h-[180px] items-center">
          {filteredSkills.map((skill) => (
            <SkillRing key={`${activeCategory}-${skill.name}`} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};