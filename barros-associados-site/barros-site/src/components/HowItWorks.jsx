import { UserPlus, FileCheck, CreditCard, Building } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Cadastro e Contratação',
      description: 'Você realiza o cadastro no site e contrata o plano com o adiantamento de uma mensalidade. Processo 100% online e seguro.'
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Análise e Documentação',
      description: 'Avaliamos o modelo de negócio, confeccionamos a documentação necessária e te enviamos tudo organizado.'
    },
    {
      number: '03',
      icon: CreditCard,
      title: 'Orientação para Pagamentos',
      description: 'Nossa equipe te orienta como fazer o pagamento de taxas para o registro da sua empresa nos órgãos competentes.'
    },
    {
      number: '04',
      icon: Building,
      title: 'CNPJ na Mão',
      description: 'CNPJ na mão! Cuidamos do processo nos órgãos públicos e avisamos quando você puder emitir nota fiscal.'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Como Funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Da abertura do CNPJ até a contabilidade completa, conte com a gente. 
            Processo simples, rápido e totalmente transparente.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-8">
                      <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-6 mt-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-primary/30"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Sua empresa precisa deixar de ser MEI?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Você não precisa esperar ultrapassar o limite de faturamento. Temos um time de 
              especialistas para te explicar todo o processo, realizando o desenquadramento 
              para você, realizando a migração para a nova opção para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                Quero abrir minha empresa
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                Deixar de ser MEI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

