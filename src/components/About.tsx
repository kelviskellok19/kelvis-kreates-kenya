import { Card } from "@/components/ui/card";
import { Briefcase, Users, TrendingUp, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Business Operations",
      description: "Hands-on experience managing mobile money services and daily operations",
    },
    {
      icon: Users,
      title: "Customer Relations",
      description: "Building trust and maintaining loyal customer relationships",
    },
    {
      icon: TrendingUp,
      title: "Financial Management",
      description: "Skilled in cash flow handling and financial record keeping",
    },
    {
      icon: Target,
      title: "Cultural Performance",
      description: "Passionate trainer in traditional music, dance, and drama",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              About Me
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Born December 19, 2004 | Kampala, Uganda
            </p>
          </div>

          <div className="mb-12 animate-slide-in-right">
            <Card className="p-6 sm:p-8 bg-card shadow-soft border-0">
              <h3 className="text-2xl font-semibold text-foreground mb-4 font-['Playfair_Display']">
                Personal Profile
              </h3>
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                A motivated and entrepreneurial recent high school graduate with a strong academic 
                foundation in Economics and hands-on experience managing a small mobile money business. 
                Passionate about business operations, customer service, and financial management. Known 
                for adaptability, initiative, and strong interpersonal skills. Eager to contribute to a 
                dynamic organization where I can apply my problem-solving abilities, learn from professionals, 
                and grow in a challenging work environment.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
