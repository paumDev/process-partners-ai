import { Workflow, Link, Bot, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";

const ServicesSection = () => {
  const { ref, isInView } = useInView(0.2);

  const services = [
    {
      icon: Workflow,
      title: "Automatización de procesos",
      description:
        "Eliminamos tareas repetitivas automatizando flujos internos: gestión de leads, facturación y seguimiento.",
    },
    {
      icon: Link,
      title: "Integraciones entre herramientas",
      description:
        "Conectamos tus herramientas favoritas para que trabajen juntas sin intervención manual.",
    },
    {
      icon: Bot,
      title: "Flujos con IA",
      description:
        "Agentes inteligentes que clasifican, responden y procesan información de forma autónoma.",
    },
    {
      icon: Search,
      title: "Diagnóstico de procesos",
      description:
        "Analizamos tu operativa para diseñar un plan de automatización personalizado.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Qué hacemos
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones de automatización adaptadas a las necesidades reales de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group cursor-default ${
                isInView ? "opacity-100 translate-x-0" : index % 2 === 0 ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
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
