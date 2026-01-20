import { Users, Target, Lightbulb } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const AboutSection = () => {
  const { ref, isInView } = useInView(0.2);

  const values = [
    {
      icon: Users,
      title: "Enfoque humano",
      description: "Entendemos tu negocio antes de proponer soluciones técnicas.",
    },
    {
      icon: Target,
      title: "Resultados reales",
      description: "Cada automatización está diseñada para impactar en tu día a día.",
    },
    {
      icon: Lightbulb,
      title: "Innovación práctica",
      description: "Usamos IA y automatización de forma accesible y efectiva.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Quiénes somos
          </h2>
          <p className="text-lg text-muted-foreground">
            Somos una agencia especializada en automatización de procesos e integración de
            inteligencia artificial. Trabajamos con empresas que buscan optimizar su operativa
            sin perder su esencia.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Antes de proponer nada,{" "}
            <span className="text-primary font-medium">nos tomamos el tiempo de entender tu negocio</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
