import { useState } from "react";
import { cn } from "@/lib/utils";

// Replace the `icon` paths with your actual icon files in `/public/icons/` or use React icon components
const skills = [
  // Languages
  { id: 1, name: "HTML", category: "languages", icon: "/icons/html-icon.png" },
  { id: 2, name: "CSS", category: "languages", icon: "/icons/css-icon.png" },
  { id: 3, name: "Java", category: "languages", icon: "/icons/java-programming-language-icon.png" },
  { id: 4, name: "JavaScript", category: "languages", icon: "/icons/javascriptlogo.png" },
  { id: 5, name: "Reactjs", category: "languages", icon: "/icons/react-js-icon.png" },
  { id: 7, name: "SQL", category: "languages", icon: "/icons/azure-sql-database-icon.png" },

  // Tools
  { id: 8, name: "Git", category: "tools", icon: "/icons/git-icon.png" },
  { id: 9, name: "Figma", category: "tools", icon: "/icons/figma-icon.png" },
  { id: 10, name: "VS Code", category: "tools", icon: "/icons/vscodelogo.png" },

  // Platforms
  { id: 11, name: "Windows", category: "platforms", icon: "/icons/windowslogo.png" },
];

const categories = ["languages", "tools", "platforms"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-lg">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex items-center gap-4 mb-6 overflow-x-auto no-scrollbar py-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-200 capitalize text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/40 text-muted-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {filteredSkills.map((s) => (
              <div
                key={s.id}
                className="rounded-lg bg-secondary/10 border border-transparent hover:border-primary/20 p-3 sm:p-6 flex flex-col items-center justify-center gap-3 text-center min-h-[120px] md:min-h-[140px]"
              >
                {s.icon ? (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 mb-1">
                    <img
                      src={s.icon}
                      alt={`${s.name} icon`}
                      className="w-full h-full object-contain mx-auto"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 grid place-items-center rounded-md bg-primary/10 text-primary">{s.name[0]}</div>
                )}

                <div className="text-sm text-muted-foreground mt-1">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
