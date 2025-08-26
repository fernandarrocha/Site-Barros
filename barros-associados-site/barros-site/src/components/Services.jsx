import { Building2, RefreshCw, Calculator, FileText, Users, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Abrir Empresa Online',
      description: 'Abertura de empresa 100% online, com toda documentação necessária e acompanhamento completo do processo.',
      features: ['CNPJ em até 15 dias', 'Documentação completa', 'Suporte especializado', 'Processo 100% digital']
    },
    {
      icon: RefreshCw,
      title: 'Trocar de Contador',
      description: 'Migração completa e segura da sua contabilidade, sem burocracia e com total transparência no processo.',
      features: ['Migração sem burocracia', 'Análise da situação atual', 'Regularização pendências', 'Transição suave']
    },
    {
      icon: Calculator,
      title: 'Contabilidade Completa',
      description: 'Serviços contábeis completos para manter sua empresa sempre em dia com todas as obrigações.',
      features: ['Balanços e demonstrações', 'Apuração de impostos', 'Escrituração contábil', 'Relatórios gerenciais']
    },
    {
      icon: FileText,
      title: 'Consultoria Fiscal',
      description: 'Orientação especializada para otimização tributária e cumprimento de todas as obrigações fiscais.',
      features: ['Planejamento tributário', 'Análise de enquadramento', 'Consultoria especializada', 'Otimização de impostos']
    },
    {
      icon: Users,
      title: 'Folha de Pagamento',
      description: 'Gestão completa da folha de pagamento, incluindo cálculos, obrigações trabalhistas e previdenciárias.',
      features: ['Cálculo de salários', 'Obrigações trabalhistas', 'eSocial e FGTS', 'Rescisões e admissões']
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Empresarial',
      description: 'Orientação estratégica para o crescimento do seu negócio com base em análises financeiras e contábeis.',
      features: ['Análise financeira', 'Planejamento estratégico', 'Indicadores de performance', 'Consultoria de crescimento']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em contabilidade, desde a abertura da empresa 
            até consultoria estratégica para o crescimento do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 group hover:border-primary/20"
              >
                {/* Icon and Title */}
                <div className="mb-6">
                  <div className="bg-primary/10 group-hover:bg-primary/20 p-4 rounded-lg w-fit mb-4 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <button className="w-full bg-primary/5 hover:bg-primary hover:text-primary-foreground text-primary font-semibold py-3 px-4 rounded-lg transition-colors">
                    Saiba Mais
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de um serviço específico?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe está preparada para atender demandas específicas do seu negócio. 
              Entre em contato e vamos encontrar a melhor solução para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                Fale com um Especialista
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                Ver Todos os Serviços
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

