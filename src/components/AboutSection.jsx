import { Code,User,Briefcase } from 'lucide-react';
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
        <p className="text-muted-foreground">Hi, I'm Maria  a software engineer who loves the intersection of code and creativity.
           I hold a Master's in Software and Intelligent Systems Engineering, and I've spent the last few years building projects
           that mix practical engineering with a bit of AI magic: think face detection systems, 
          multilingual chatbots, and everything in between. Outside of coding. I'm a lifelong learner 
          always picking up a new language or a new skill. </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacts" className="cosmic-button" style={{ pointerEvents: 'auto' }}> Get in touch</a>
          <a href="" className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300" style={{ pointerEvents: 'auto' }}> Download CV</a>
        </div>
      </div>
      <div className= "grid grid-cols-1 gap-6 p-6">
      {/* card1*/}
          <div className=" gradient-border p-6 card-hover" style={{ pointerEvents: 'auto' }}>
            <div className="flex items-start gap-4 ">
              <div className="p-3 rounded-full bg-primary">
                <Code className="h-6 w-6 " />
              </div>
              <div className = "text-left">
                  <h4 className="font-semibold text-lg">Web Developer</h4>
                  <p className ="text-muted-foreground"> good with web devlopment</p>
              </div>
            </div>
          </div>
      {/* card2*/}
       <div className=" gradient-border p-6 card-hover" style={{ pointerEvents: 'auto' }}>
            <div className="flex items-start gap-4 ">
              <div className="p-3 rounded-full bg-primary">
                <User className="h-6 w-6 " />
              </div>
              <div className = "text-left">
                  <h4 className="font-semibold text-lg">Web Developer</h4>
                  <p className ="text-muted-foreground"> good with web devlopment</p>
              </div>
            </div>
        </div>

      {/* card3*/}
      <div className=" gradient-border p-6 card-hover" style={{ pointerEvents: 'auto' }}>
            <div className="flex items-start gap-4 ">
              <div className="p-3 rounded-full bg-primary">
                <Briefcase className="h-6 w-6 " />
              </div>
              <div className = "text-left">
                  <h4 className="font-semibold text-lg">Web Developer</h4>
                  <p className ="text-muted-foreground"> good with web devlopment</p>
              </div>
            </div>
        </div>

        
      </div>
      
    </div>
  </div>

</section>)  };