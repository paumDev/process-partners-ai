import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Automatización de procesos"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="h-4 w-4 animate-pulse" />
            Automatización inteligente para tu negocio
          </div>

          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transforma tus procesos manuales en{" "}
            <span className="text-primary relative">
              flujos automáticos
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-[shimmer_2s_linear_infinite]" />
              </svg>
            </span>
          </h1>

          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Ayudamos a pequeñas y medianas empresas a ahorrar tiempo, reducir errores y
            escalar sus operaciones mediante automatización e inteligencia artificial.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button 
              size="lg" 
              onClick={scrollToContact} 
              className="gap-2 animate-pulse-glow transition-all duration-300 hover:scale-105"
            >
              Hablemos de tu proyecto
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToServices}
              className="transition-all duration-300 hover:scale-105 hover:bg-primary/10"
            >
              Ver servicios
            </Button>
          </div>

          <div 
            className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center gap-2 group cursor-default">
              <div className="h-2 w-2 rounded-full bg-primary group-hover:animate-ping" />
              Sin compromiso
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <div className="h-2 w-2 rounded-full bg-primary group-hover:animate-ping" />
              Diagnóstico gratuito
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <div className="h-2 w-2 rounded-full bg-primary group-hover:animate-ping" />
              Soluciones a medida
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-[fade-in-up_1s_ease-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
