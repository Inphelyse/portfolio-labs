export default function Hero() {
    return (
      <section className="py-20 px-6 max-w-4xl mx-auto flex flex-col items-start justify-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-amber mb-4">
          Digital Product Designer & Developer
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl">
          Crafting digital <span className="text-accent-amber">experiences</span> with purpose.
        </h1>
        
        <p className="text-text-muted text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
          I specialize in creating clean, user-centric interfaces and robust web applications. 
          Turning complex problems into elegant, intuitive designs.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8 w-full sm:w-auto">
          <button className="bg-accent-amber text-bg-primary font-bold px-6 py-3 rounded-lg hover:bg-amber-500 transition-all cursor-pointer shadow-lg shadow-amber-950/20">
            View Projects
          </button>
          <button className="border border-slate-700 text-text-main font-bold px-6 py-3 rounded-lg hover:bg-slate-800 transition-all cursor-pointer">
            Contact Me
          </button>
        </div>
      </section>
    );
  }