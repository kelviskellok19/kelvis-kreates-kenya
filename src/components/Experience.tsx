import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Music } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Founder and Operator",
      organization: "Mobile Money Business",
      location: "Kampala/Kasangati, Uganda",
      period: "2025",
      type: "Self-Employed",
      responsibilities: [
        "Established and managed a small-scale mobile banking service for local customers",
        "Handle cash flow, customer service and transaction records daily",
        "Built and maintained a loyal customer base through trust and consistency",
        "Gained practical experience in business operations, financial management and problem solving",
      ],
    },
    {
      icon: Music,
      title: "Volunteer Music, Dance and Drama Trainer",
      organization: "Afrique Cultural Troupe",
      location: "Kampala, Uganda",
      period: "Ongoing",
      type: "Volunteer",
      responsibilities: [
        "Teaching Traditional Dances, Instruments, and Music",
        "Designing Music Dance and Drama Costumes",
        "Performing Music & Dance on Weddings, Introductions and other events",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              Experience
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical experience in business operations and cultural performance
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 bg-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <exp.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-['Playfair_Display']">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-medium mt-1">
                          {exp.organization}
                        </p>
                      </div>
                      <Badge variant="secondary" className="self-start">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground/80">
                          <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
