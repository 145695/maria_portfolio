import {  ExternalLink } from "lucide-react";
import projects from "../data/projects.json";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Things I've built, from computer vision to full-stack apps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
            <div
                key={project.title}
                className="gradient-border overflow-hidden card-hover"
                style={{ pointerEvents: "auto" }}
            >
                {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                )}

                <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* tech tags */}
                {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                        <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                )}

                <div className="flex gap-4">
                    {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-primary hover:underline" style={{ pointerEvents: "auto" }}>
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="GitHub" className="h-4 w-4 dark:invert" />
                        Repo
                    </a>
                    )}
                    {project.downloadUrl && (
                    <a href={project.downloadUrl} className="flex items-center gap-1 text-sm text-primary hover:underline" style={{ pointerEvents: "auto" }}>
                        <ExternalLink className="h-4 w-4" /> Download
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
};

export const TeachingSection = () => {
  return (
    <section id="teaching" className="py-24 relative px-4 bg-second">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Teaching <span className="text-primary">CS</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          I share computer science and software engineering tutorials on Instagram —
          a full course is on the way, but for now you can follow along there.
        </p>
        <a
          href="https://instagram.com/maria_learn_cs"
          target="_blank"
          rel="noopener noreferrer"
          className="cosmic-button inline-flex items-center gap-2"
          style={{ pointerEvents: "auto" }}
        >
           <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
                alt="Instagram"
                className="h-5 w-5 dark:invert"/>
          Follow @maria_learn_cs
        </a>
      </div>
    </section>
  );
};