import { Award, Users, Clock, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '300+',
      label: 'Empresas Atendidas',
      description: 'Clientes que confiam em nosso trabalho'
    },
    {
      icon: Clock,
      number: '40+',
      label: 'Anos de Experiência',
      description: 'Décadas de conhecimento contábil'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Ética Profissional',
      description: 'Transparência em cada decisão'
    },
    {
      icon: Shield,
      number: 'CRC',
      label: 'Registro Ativo',
      description: 'Profissionais certificados'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Sobre a Barros & Associados
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  A Barros & Associados foi fundada pelo <strong>Dr. William Giovanni Barros</strong> (in memoriam), 
                  que iniciou seus trabalhos contábeis na década de 80, na Fundação Christiano Ottoni 
                  (Universidade Federal de Minas Gerais).
                </p>
                <p>
                  Hoje, sob a liderança de <strong>Adriane Rocha</strong>, continuamos o legado de excelência 
                  e ética profissional estabelecido pelo Dr. William. Adriane traz sua vasta experiência 
                  e visão inovadora para modernizar nossos serviços, sempre mantendo os valores 
                  fundamentais da empresa.
                </p>
                <p>
                  Nossa missão é <strong>levar um trabalho com ética profissional</strong> e 
                  <strong> simplificar a jornada do empreendedor</strong>, oferecendo muito mais que 
                  números - oferecemos direcionamento para os seus sonhos.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <img 
                  src="/src/assets/images/caduceu-symbol.png" 
                  alt="Caduceu" 
                  className="h-6 w-6 mr-3"
                />
                O Símbolo da Nossa Profissão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Na Barros & Associados Contabilidade, seguimos os princípios representados pelo símbolo 
                da contabilidade: o caduceu é um emblema que expressa imparcialidade, sabedoria e a 
                capacidade de equilibrar informações financeiras. Assim como ele, somos o elo entre 
                a visão do empreendedor e a realização prática do seu negócio.
              </p>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            {/* Professional Image */}
            <div className="relative">
              <img
                src="/src/assets/images/contador-profissional.jpg"
                alt="Profissional Barros & Associados"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">300+</div>
                  <div className="text-sm">Empresas</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-muted/30 rounded-xl p-6 text-center hover:bg-muted/50 transition-colors"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Ética Profissional</h4>
              <p className="text-muted-foreground">
                Transparência e responsabilidade em cada número, em cada decisão.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Relacionamento</h4>
              <p className="text-muted-foreground">
                Construímos parcerias duradouras baseadas na confiança mútua.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Crescimento</h4>
              <p className="text-muted-foreground">
                Orientamos o crescimento sustentável e planejado do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

