import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/kelvis-profile.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    // This would trigger a CV download - placeholder for now
    window.alert("CV download would be triggered here");
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Takes up half */}
          <div className="animate-fade-in">
            <div className="w-full aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden border-8 border-accent shadow-accent">
              <img 
                src={profileImage} 
                alt="Kelvis Kiyimba Emmanuel" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content - Takes up other half */}
          <div className="text-center lg:text-left animate-slide-in-right">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 font-['Playfair_Display']">
              Kelvis Kiyimba Emmanuel
            </h1>
            <div className="h-1 w-24 bg-accent mb-6 rounded-full mx-auto lg:mx-0"></div>

            <p className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 mb-6 font-medium">
              Aspiring Entrepreneur | Business Enthusiast | Cultural Performer
            </p>

            <p className="text-base sm:text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              A motivated young professional from Kampala, Uganda, passionate about business operations, 
              customer service, and financial management. Eager to make an impact through innovation and dedication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent text-base font-semibold"
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm text-base font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-primary-foreground/80 text-sm">
              <a href="tel:+256708406163" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                +256 (0) 708 406 163
              </a>
              <a href="mailto:kiyimbakelvis17@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                kiyimbakelvis17@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Kampala, Uganda
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
