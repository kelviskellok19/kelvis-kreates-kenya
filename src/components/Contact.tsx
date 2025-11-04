import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, User } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kiyimbakelvis17@gmail.com",
      href: "mailto:kiyimbakelvis17@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+256 (0) 708 406 163",
      href: "tel:+256708406163",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "P.O. Box 1665, Kampala, Uganda",
      href: null,
    },
  ];

  const references = [
    {
      name: "Mr. Wafana Michael",
      title: "Advanced level Teacher of History",
      phone: "+256-785-877877",
    },
    {
      name: "Dr.-Ing. Samuel B. Mabikke (PhD)",
      title: "Senior Land and Water Governance Officer, UN-FAO",
      phone: "+256-772-000584",
      email: "Samuel.Mabikke@fao.org",
    },
    {
      name: "Miss. Nakanyike Euphrazia",
      title: "Advanced level Teacher of Luganda",
      phone: "+256-772-915493",
      email: "euphrazianakanyike@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.label}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.value}</p>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card shadow-soft border-0 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-['Playfair_Display'] flex items-center gap-3">
              <User className="h-6 w-6 text-primary" />
              References
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {references.map((ref, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-foreground">{ref.name}</h4>
                  <p className="text-sm text-muted-foreground">{ref.title}</p>
                  <p className="text-sm text-muted-foreground">
                    <a href={`tel:${ref.phone}`} className="hover:text-primary transition-colors">
                      {ref.phone}
                    </a>
                  </p>
                  {ref.email && (
                    <p className="text-sm text-muted-foreground">
                      <a href={`mailto:${ref.email}`} className="hover:text-primary transition-colors break-all">
                        {ref.email}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
