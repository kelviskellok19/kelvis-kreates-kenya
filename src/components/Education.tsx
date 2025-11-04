import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      period: "2023-2024",
      degree: "Uganda Advanced Certificate of Education (U.A.C.E)",
      institution: "Makerere College School",
      subjects: "History, Economics, Luganda and Sub Mathematics",
    },
    {
      period: "2018-2022",
      degree: "Uganda Certificate of Education (U.C.E)",
      institution: "Makerere College School",
      subjects: "English, History, Geography, Luganda, Mathematics, Physics, Chemistry, Biology, Commerce and Accounts",
    },
    {
      period: "2010-2017",
      degree: "Primary Leaving Examination (PLE)",
      institution: "Kampala Quality Primary School",
      subjects: "",
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              Education
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strong academic foundation with focus on Economics and Business
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary border-4 border-background rounded-full z-10"></div>

                  {/* Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <Card className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-300 border-0">
                      <div className="flex items-start gap-4">
                        {index % 2 !== 0 && (
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <GraduationCap className="h-6 w-6 text-primary-foreground" />
                          </div>
                        )}
                        
                        <div className={`flex-grow ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-3">
                            {edu.period}
                          </span>
                          <h3 className="text-xl font-semibold text-foreground mb-2 font-['Playfair_Display']">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-medium mb-3">{edu.institution}</p>
                          {edu.subjects && (
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Subjects:</span> {edu.subjects}
                            </p>
                          )}
                        </div>

                        {index % 2 === 0 && (
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <GraduationCap className="h-6 w-6 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>

                  {/* Spacer for timeline */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
