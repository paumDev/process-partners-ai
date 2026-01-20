import { Clock, ShieldCheck, TrendingUp, Users, Coins, CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorro de tiempo",
      description: "Libera horas de trabajo manual que puedes dedicar a tareas de mayor valor.",
    },
    {
      icon: ShieldCheck,
      title: "Reducción de errores",
      description: "Los procesos automáticos eliminan fallos humanos y garantizan consistencia.",
    },
    {
      icon: TrendingUp,
      title: "Procesos escalables",
      description: "Tus flujos crecen con tu negocio sin necesidad de más recursos.",
    },
    {
      icon: Users,
      title: "Equipo más productivo",
      description: "Tu equipo se centra en lo que importa, no en tareas repetitivas.",
    },
    {
      icon: Coins,
      title: "Optimización de costes",
      description: "Haz más con menos, reduciendo gastos operativos innecesarios.",
    },
    {
      icon: CheckCircle,
      title: "Mayor control",
      description: "Visibilidad total sobre tus procesos y datos en tiempo real.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Beneficios de automatizar
          </h2>
          <p className="text-lg text-muted-foreground">
            La automatización no es solo tecnología, es una inversión estratégica que
            transforma la forma en que trabajas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-4 p-6 bg-card rounded-lg border border-border"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
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
