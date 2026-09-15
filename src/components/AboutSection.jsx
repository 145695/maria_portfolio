import { Laptop,AppWindow,Bot } from 'lucide-react';

export const AboutSection = () => {
  return (
<section id = "about" className="py-24 relative px-4">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl md:text-4xl font-bold text-center">
      About <span className="text-primary">Me</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Hi, I'm Maria Boukhelfa</h3>
        <p className="text-muted-foreground">I'm an Intelligent Systems Engineer with 
          a Master's degree, specializing in building end-to-end tech solutions 
           from web and mobile apps to AI-powered systems, agentic AI, and DevOps pipelines.
           I love turning complex problems into clean, working products. </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacts" className="cosmic-button" style={{ pointerEvents: 'auto' }}> Get in touch</a>
          <a href="/Maria-Boukhelfa-CV.pdf" className=" px-6 py-2 rounded-full border border-primary 
          text-primary hover:bg-primary/10 transition-color
           duration-300" download="Maria-Boukhelfa-CV.pdf" style={{ pointerEvents: 'auto' }}> Download CV</a>
        </div>
      </div>
      <div className= "grid grid-cols-1 gap-6 p-6">
      {/* card1*/}
          <div className=" gradient-border p-6 card-hover" style={{ pointerEvents: 'auto' }}>
            <div className="flex items-start gap-4 ">
              <div className="p-3 rounded-full bg-primary">
                <Laptop className="h-6 w-6 " />
              </div>
              <div className = "text-left">
                  <h4 className="font-semibold text-lg"> Software Engineer</h4>
                  <p className ="text-muted-foreground"> Skilled in system design, robust architecture, and clean code.</p>
              </div>
            </div>
          </div>
      {/* card2*/}
       <div className=" gradient-border p-6 card-hover" style={{ pointerEvents: 'auto' }}>
            <div className="flex items-start gap-4 ">
              <div className="p-3 rounded-full bg-primary">
                <AppWindow className="h-6 w-6 " />
              </div>
              <div className = "text-left">
                  <h4 className="font-semibold text-lg">Web & Mobile Developer</h4>
                  <p className ="text-muted-foreground">Experienced in building responsive web apps and cross-platform mobile applications.</p>
              </div>
            </div>
        </div>

      {/* card3*/}
      <div className=" gradient-border p-6 card-hover" style={{ pointerEvents: 'auto' }}>
            <div className="flex items-start gap-4 ">
              <div className="p-3 rounded-full bg-primary">
                <Bot className="h-6 w-6 " />
              </div>
              <div className = "text-left">
                  <h4 className="font-semibold text-lg">AI Agent Engineer</h4>
                  <p className ="text-muted-foreground">Focused on building multi-agent systems, LLM orchestration, and smart workflows.</p>
              </div>
            </div>
        </div>

        
      </div>
      
    </div>
  </div>

</section>)  };