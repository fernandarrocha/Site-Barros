import { Check, Star, Shield } from 'lucide-react';
import { Button } from './ui/button';

const Plans = () => {
  const plans = [
    {
      name: 'Essencial',
      price: 'R$ 195',
      period: '/mês',
      description: 'Ideal para pequenas empresas que estão começando',
      popular: false,
      features: [
        'Contabilidade completa',
        'Emissão de guias de impostos',
        'Relatórios mensais',
        'Atendimento via chat e e-mail',
        'Certificado digital incluso',
        'Suporte básico'
      ],
      notIncluded: [
        'Atendimento via telefone',
        'Assessor dedicado',
        'Consultoria estratégica'
      ]
    },
    {
      name: 'Profissional',
      price: 'R$ 295',
      period: '/mês',
      description: 'Para empresas em crescimento que precisam de mais suporte',
      popular: true,
      features: [
        'Tudo do plano Essencial',
        'Atendimento via telefone',
        'Relatórios gerenciais avançados',
        'Consultoria fiscal',
        'Folha de pagamento (até 5 funcionários)',
        'Suporte prioritário',
        'Reuniões mensais'
      ],
      notIncluded: [
        'Assessor dedicado exclusivo',
        'Consultoria estratégica ilimitada'
      ]
    },
    {
      name: 'Premium',
      price: 'R$ 495',
      period: '/mês',
      description: 'Solução completa para empresas que buscam excelência',
      popular: false,
      features: [
        'Tudo do plano Profissional',
        'Assessor dedicado exclusivo',
        'Consultoria estratégica ilimitada',
        'Folha de pagamento ilimitada',
        'Planejamento tributário',
        'Relatórios personalizados',
        'Atendimento 24/7',
        'Reuniões semanais'
      ],
      notIncluded: []
    }
  ];

  return (
    <section id="planos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Conheça nossos Planos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos incluem nossa garantia 
            de qualidade e ética profissional.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-primary scale-105 lg:scale-110' 
                  : 'border-border/50 hover:border-primary/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start opacity-50">
                      <div className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <div className="h-0.5 w-3 bg-muted-foreground"></div>
                      </div>
                      <span className="text-muted-foreground line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 font-semibold ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary'
                  }`}
                >
                  Contratar Plano
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de algo mais específico?
            </h3>
            <p className="text-muted-foreground mb-6">
              Para empresas com necessidades especiais ou grande volume de operações, 
              criamos soluções personalizadas. Entre em contato e vamos conversar sobre 
              suas necessidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Fale com um Especialista
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3">
                Ver Comparativo Completo
              </Button>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Shield className="h-5 w-5 mr-2" />
            <span className="font-semibold">Garantia de 30 dias ou seu dinheiro de volta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;

