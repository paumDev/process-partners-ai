import { 
  FileSpreadsheet, 
  Mail, 
  CheckSquare, 
  MessageCircle, 
  FileText, 
  Cloud,
  Workflow,
  Brain
} from "lucide-react";

const ToolsSection = () => {
  const tools = [
    { name: "Google Sheets", icon: FileSpreadsheet },
    { name: "Gmail", icon: Mail },
    { name: "ClickUp", icon: CheckSquare },
    { name: "Discord", icon: MessageCircle },
    { name: "Notion", icon: FileText },
    { name: "Google Drive", icon: Cloud },
    { name: "n8n / Make", icon: Workflow },
    { name: "OpenAI / IA", icon: Brain },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Herramientas con las que trabajamos
          </h2>
          <p className="text-lg text-muted-foreground">
            Nos adaptamos al stack de herramientas que ya utilizas. Si trabajas con una
            aplicación específica, probablemente podamos integrarla.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors group"
            >
              <tool.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors mb-2" />
              <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Y muchas más a través de APIs e integraciones personalizadas
        </p>
      </div>
    </section>
  );
};

export default ToolsSection;
