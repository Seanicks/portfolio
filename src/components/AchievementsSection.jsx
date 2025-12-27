import { Trophy, Award } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Dean's List",
    issuer: "Cebu Institute of Technology - University",
    year: "2023",
    description: "Recognized for academic excellence and ranking in the top 10% of the class.",
  },
  {
    id: 2,
    title: "Hackathon Winner",
    issuer: "HackPH",
    year: "2024",
    description: "1st Place - Web App Track for building a collaborative analytics tool.",
  },
  {
    id: 3,
    title: "Open Source Contributor",
    issuer: "Various Projects",
    year: "2022 - 2025",
    description: "Contributed 50+ PRs to open-source repos including tooling and frontend libs.",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Notable <span className="text-primary">Achievements</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A few highlights from my academic and extracurricular work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div key={a.id} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{a.title}</h3>
                  <div className="text-sm text-muted-foreground">{a.issuer} • {a.year}</div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
