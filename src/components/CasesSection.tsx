import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CasesSection = () => {
  const cases = [
    {
      industry: "Agencia de marketing",
      problem:
        "El equipo perdía varias horas al día actualizando manualmente reportes de campañas y enviando informes a clientes.",
      solution:
        "Automatizamos la extracción de datos, generación de reportes y envío programado por email.",
      result:
        "El equipo recuperó más de 10 horas semanales que ahora dedican a estrategia y creatividad.",
    },
    {
      industry: "Empresa de servicios",
      problem:
        "Los leads llegaban por múltiples canales y se perdían en bandejas de entrada desorganizadas.",
      solution:
        "Centralizamos todos los leads en un CRM y automatizamos el seguimiento inicial.",
      result:
        "Tiempo de respuesta reducido de días a minutos, con mayor tasa de conversión.",
    },
    {
      industry: "Equipo remoto",
      problem:
        "La coordinación entre diferentes zonas horarias generaba retrasos y tareas duplicadas.",
      solution:
        "Implementamos flujos automáticos de asignación de tareas y notificaciones inteligentes.",
      result:
        "Mejor visibilidad del trabajo y eliminación de duplicidades y olvidos.",
    },
  ];

  return (
    <section id="cases" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Casos de éxito
          </h2>
          <p className="text-lg text-muted-foreground">
            Ejemplos reales de cómo la automatización ha transformado el día a día de
            empresas como la tuya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="text-sm font-medium text-primary mb-2">
                  {caseStudy.industry}
                </div>
                <CardTitle className="text-lg">El problema</CardTitle>
                <CardDescription>{caseStudy.problem}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    La solución
                  </h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    El resultado
                  </h4>
                  <p className="text-sm text-primary">{caseStudy.result}</p>
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
