export default function ProjectCard({ project }) {
    return (
      <div className="bg-panel-card rounded-2xl overflow-hidden border border-slate-800 shadow-xl group hover:-translate-y-2 transition-transform duration-300">
        
        <div className="h-48 w-full overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          />
        </div>
  
        <div className="p-6 flex flex-col justify-between h-56">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
              <span className="text-text-muted group-hover:text-accent-amber transition-colors">
                ↗
              </span>
            </div>
  
            <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
  
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-semibold bg-bg-primary/50 text-text-muted px-3 py-1 rounded-full border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }