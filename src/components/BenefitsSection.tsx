import { Clock, ShieldCheck, TrendingUp, Users, Coins, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const BenefitsSection = () => {
  const { ref, isInView } = useInView(0.2);

  const benefits = [
    {
      icon: Clock,
      title: "Ahorro de tiempo",
      description: "Libera horas de trabajo manual para tareas de mayor valor.",
    },
    {
      icon: ShieldCheck,
      title: "Menos errores",
      description: "Procesos automáticos que garantizan consistencia.",
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad",
      description: "Tus flujos crecen con tu negocio sin más recursos.",
    },
    {
      icon: Users,
      title: "Equipo productivo",
      description: "Tu equipo se centra en lo que realmente importa.",
    },
    {
      icon: Coins,
      title: "Menos costes",
      description: "Haz más con menos, reduciendo gastos operativos.",
    },
    {
      icon: CheckCircle,
      title: "Mayor control",
      description: "Visibilidad total sobre tus procesos en tiempo real.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Beneficios de automatizar
          </h2>
          <p className="text-lg text-muted-foreground">
            Una inversión estratégica que transforma la forma en que trabajas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
