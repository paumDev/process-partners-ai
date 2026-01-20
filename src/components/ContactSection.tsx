import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const ContactSection = () => {
  const { toast } = useToast();
  const { ref, isInView } = useInView(0.2);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Hablemos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Listo para automatizar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Cuéntanos qué procesos quieres optimizar. Sin compromiso.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2 group">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="transition-all duration-300 focus:scale-[1.01] focus:shadow-lg"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Enviando...
                </span>
              ) : (
                <>
                  Enviar mensaje
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <div 
            className={`mt-8 text-center transition-all duration-700 delay-400 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm text-muted-foreground mb-2">
              ¿Prefieres escribirnos directamente?
            </p>
            <a
              href="mailto:hola@processflow.es"
              className="inline-flex items-center gap-2 text-primary hover:underline group"
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              hola@processflow.es
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
