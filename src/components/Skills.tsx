import { Card } from "@/components/ui/card";
import { Languages, Users, Computer, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Languages,
      title: "Language Skills",
      skills: [
        { name: "Luganda", level: "Mother Tongue" },
        { name: "English", level: "Fluent (Written & Verbal)" },
      ],
    },
    {
      icon: Users,
      title: "Social & Soft Skills",
      skills: [
        "Team Building and Strong problem solving skills",
        "Financial record keeping and mobile money handling",
        "Team work and leadership",
        "Communication and cross-cultural awareness",
        "Business operations and Customer relations",
        "Adaptability and initiative",
      ],
    },
    {
      icon: Computer,
      title: "Computer Skills",
      skills: [
        "Microsoft Office packages (Word, Excel, PowerPoint)",
        "Internet/Web based Technologies",
        "Graphics Designing (Adobe Photoshop & Illustrator)",
      ],
    },
    {
      icon: Lightbulb,
      title: "Key Strengths",
      skills: [
        "Entrepreneurial mindset",
        "Financial management",
        "Customer service excellence",
        "Cultural performance and training",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              Skills & Competences
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse skill set combining business acumen with technical and creative abilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground pt-2 font-['Playfair_Display']">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {Array.isArray(category.skills) && typeof category.skills[0] === "string" ? (
                    // For simple string lists
                    <ul className="space-y-2">
                      {(category.skills as string[]).map((skill, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground/80">
                          <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    // For language skills with levels
                    <div className="space-y-3">
                      {(category.skills as Array<{ name: string; level: string }>).map(
                        (skill, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}</span>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
