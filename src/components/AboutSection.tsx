import { Users, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Quiénes somos
          </h2>
          <p className="text-lg text-muted-foreground">
            Somos una agencia especializada en automatización de procesos e integración de
            inteligencia artificial. Trabajamos con pequeñas y medianas empresas que buscan
            optimizar su operativa sin perder el toque personal que las hace únicas.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            No creemos en soluciones genéricas. Por eso, antes de proponer nada,{" "}
            <span className="text-primary font-medium">nos tomamos el tiempo de entender tu negocio</span>,
            tus herramientas actuales y tus objetivos reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
