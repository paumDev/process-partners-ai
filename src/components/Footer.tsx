import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2 group">
                Process<span className="text-primary">Flow</span>
              </h3>
              <p className="text-sm text-secondary-foreground/80">
                Automatización de procesos e integración de IA
              </p>
            </div>

            <div className="text-center md:text-right">
              <a
                href="mailto:hola@processflow.es"
                className="inline-flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                hola@processflow.es
              </a>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
              <p>© {new Date().getFullYear()} ProcessFlow. Todos los derechos reservados.</p>
              <p>
                Soluciones personalizadas, no respuestas genéricas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
