import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-primary via-secondary to-primary/80 text-white py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#475e7d] opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Como você imagina o <span className="text-accent">futuro</span>{" "}
                da sua empresa?
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Crescimento, ética profissional, liberdade financeira,
                segurança? Seja qual for o seu sonho, ele começa com
                planejamento, organização e decisões bem fundamentadas.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-white/80">
                Na Barros & Associados, você encontra muito mais do que números,
                encontra direcionamento para os seus sonhos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-accent text-black hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg"
                >
                  Fale com um Especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-black hover:bg-white hover:text-primary px-8 py-4 text-lg"
                >
                  Conheça nossos Serviços
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-white/90">
                  Mais de 300 empresas atendidas
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-white/90">Décadas de experiência</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-white/90">Ética profissional</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/src/assets/images/hero-professional.png"
                alt="Profissional de contabilidade"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 37.5C700 45 800 60 900 67.5C1000 75 1100 75 1150 75L1200 75V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
