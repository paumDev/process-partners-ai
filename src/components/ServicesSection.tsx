import { Workflow, Link, Bot, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Workflow,
      title: "Automatización de procesos",
      description:
        "Eliminamos tareas repetitivas automatizando flujos internos: desde la gestión de leads hasta la facturación y el seguimiento de clientes.",
    },
    {
      icon: Link,
      title: "Integraciones entre herramientas",
      description:
        "Conectamos tus herramientas favoritas (CRM, email, gestores de tareas, almacenamiento) para que trabajen juntas sin intervención manual.",
    },
    {
      icon: Bot,
      title: "Flujos con IA",
      description:
        "Implementamos agentes inteligentes y asistentes con IA que clasifican, responden y procesan información de forma autónoma.",
    },
    {
      icon: Search,
      title: "Diagnóstico de procesos",
      description:
        "Analizamos tu operativa actual para identificar oportunidades de mejora y diseñar un plan de automatización personalizado.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Qué hacemos
          </h2>
          <p className="text-lg text-muted-foreground">
            Diseñamos e implementamos soluciones de automatización adaptadas a las
            necesidades reales de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
