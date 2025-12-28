import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Spedermath",
    description: "SpederMath is a teacher-assisted, web-based mathematics learning application designed for children with autism, particularly low-functioning learners. The system focuses on early numeracy skills such as number recognition and counting through structured lessons, gamified activities, visual cues, and audio prompts.",
    image: "/projects/Spedermath.png",
    tags: ["React", "TailwindCSS", "Spring Boot"],
    demoUrl: "https://spedermath.app/",
    githubUrl: "https://github.com/felraine/SpederMath_Repository",
  },
  {
    id: 2,
    title: "Listify",
    description:
      "Listify is a web-based task management platform designed to help students organize and track their activities, deadlines, and task details efficiently. The system allows users to create tasks, set reminders, add sub-notes, and integrate tasks with a calendar. Notifications are provided to ensure timely completion of tasks. ",
    image: "/projects/listify.png",
    tags: ["Reactjs","Vite", "Mysql", "Spring Boot"],
    demoUrl: "#",
    githubUrl: "https://github.com/Seanicks/Listify#",
  },
  {
    id: 3,
    title: "Project Porcie",
    description:
      "A Java-based puzzle adventure game built in Apache NetBeans where players solve clues, complete puzzles, and choose from three playable characters.",
    image: "/projects/porcie2.png",
    tags: ["Apache Netbeans","Java", "Sql",],
    demoUrl: "#",
    githubUrl: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {(project.id !== 2 && project.id !== 3 && project.demoUrl && project.demoUrl !== '#') && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${project.title} demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${project.title} repository`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Seanicks"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
