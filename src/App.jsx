import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { projectData } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-main selection:bg-accent-amber selection:text-bg-primary">
      
      {/* Top Main Structural Wrapper */}
      <main className="max-w-6xl mx-auto pb-32">
        
        {/* Render your Figma Hero statement */}
        <Hero />

        {/* Dynamic Project Portfolio Grid Matrix */}
        <section className="px-6 py-12 border-t border-slate-900">
          
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold">Selected Work</h2>
            <p className="text-text-muted text-sm mt-1">A curated collection of my recent projects.</p>
          </div>

          {/* 🚀 Scalability Grid Engine: 1 Column on Mobile, 3 Columns on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {projectData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </section>

      </main>

    </div>
  );
}