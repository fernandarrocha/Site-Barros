import { Shield, Users, TrendingUp, Clock, Heart, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Segurança e Confiabilidade",
      description:
        "Cuidamos da saúde financeira para que o seu negócio possa crescer com segurança, inovar com confiança e realizar seus planos com tranquilidade.",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description:
        "Você escolhe a forma de atendimento: WhatsApp, e-mail, telefone ou presencial. Assessores especialistas no segmento do seu negócio.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento Sustentável",
      description:
        "Nós ajudamos você a enxergar o presente com clareza e construir um futuro sólido através de planejamento estratégico.",
    },
    {
      icon: Clock,
      title: "Agilidade nos Processos",
      description:
        "Nossos especialistas vão te informar sempre que uma ação sua for necessária, como pagamento de impostos e atualização de informações.",
    },
    {
      icon: Heart,
      title: "Ética Profissional",
      description:
        "Levamos um trabalho com ética profissional, valorizando a transparência em cada número, em cada decisão.",
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description:
        "Mais de 300 empresas confiam na Barros & Associados. Décadas de experiência simplificando a jornada do empreendedor.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Por que escolher a Barros & Associados?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simplificamos o complexo. Sustentamos o seu crescimento. E, acima de
            tudo, valorizamos a ética em cada número, em cada decisão.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para transformar o futuro da sua empresa?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Somos o elo entre a visão do empreendedor e a realização prática
              do seu negócio. Guiamos sua jornada com clareza, protegendo seu
              caminho com conhecimento, transparência e responsabilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-[#232323] px-8 py-3 rounded-lg font-semibold transition-colors">
                Fale com um Especialista
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                Conheça nossos Planos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
