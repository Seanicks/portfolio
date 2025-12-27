import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 md:pt-0"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile image on the left */}
          <div className="flex-shrink-0 mt-4 md:mt-0 mx-auto md:mx-0">
            <img
              src="/seanjames.jpg"
              alt="Seanjames Lacaba"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg ring-2 ring-primary/30"
            />
          </div>

          {/* Text content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Seanjames
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Lacaba
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I am an aspiring Full Stack Developer and an IT student at Cebu Institute of Technology - University.
              Throughout my years of study and continuous learning, 
              I have developed multiple projects that demonstrate my skills in building functional and user-focused applications.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>

            {/* Scroll indicator - static under button on small screens, absolute on md+ */}
            <div aria-hidden="true" className="static md:absolute md:bottom-8 left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center animate-bounce pointer-events-none mt-4 md:mt-0 mx-auto md:mx-0">
              <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mb-0.5 md:mb-2">Scroll</span>
              <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
