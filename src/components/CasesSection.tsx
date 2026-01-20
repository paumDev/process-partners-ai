import { ArrowRight, Building2, Megaphone, Globe } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";

const CasesSection = () => {
  const { ref, isInView } = useInView(0.2);

  const cases = [
    {
      icon: Megaphone,
      industry: "Agencia de marketing",
      problem: "Horas perdidas en reportes manuales.",
      result: "+10 horas semanales recuperadas",
    },
    {
      icon: Building2,
      industry: "Empresa de servicios",
      problem: "Leads perdidos en múltiples canales.",
      result: "Respuesta en minutos, no en días",
    },
    {
      icon: Globe,
      industry: "Equipo remoto",
      problem: "Coordinación caótica entre zonas horarias.",
      result: "Cero tareas duplicadas ni olvidos",
    },
  ];

  return (
    <section id="cases" className="py-20 bg-card overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Casos de éxito
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados reales en empresas como la tuya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cases.map((caseStudy, index) => (
            <Card 
              key={index} 
              className={`border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group overflow-hidden ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <caseStudy.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {caseStudy.industry}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  {caseStudy.problem}
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-primary">{caseStudy.result}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
