import { useInView } from "@/hooks/useInView";

const ToolsSection = () => {
  const { ref, isInView } = useInView(0.2);

  const tools = [
    { name: "Google Drive", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" },
    { name: "Gmail", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" },
    { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
    { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg" },
    { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
    { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "n8n", logo: "https://n8n.io/favicon.ico" },
    { name: "Make", logo: "https://images.ctfassets.net/un655fb9wln6/5H4OQBt9LLtWVT6kbEF70F/e75db9ad0aa08bb7fbc2f1ac27f7f8ef/make-logo-white.svg" },
    { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
    { name: "Discord", logo: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg" },
  ];

  // Duplicate for infinite scroll
  const duplicatedTools = [...tools, ...tools];

  return (
    <section className="py-20 bg-card overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Herramientas con las que trabajamos
          </h2>
          <p className="text-lg text-muted-foreground">
            Nos adaptamos al stack que ya utilizas. Si trabajas con una aplicación específica, 
            probablemente podamos integrarla.
          </p>
        </div>

        {/* Infinite scroll carousel */}
        <div 
          className={`relative transition-all duration-700 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />
          
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {duplicatedTools.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 mx-4 group"
              >
                <div className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-28 h-28">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="text-xs text-center text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p 
          className={`text-center text-sm text-muted-foreground mt-8 transition-all duration-700 delay-300 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          Y muchas más a través de APIs e integraciones personalizadas
        </p>
      </div>
    </section>
  );
};

export default ToolsSection;
