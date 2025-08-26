import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#455973] text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/src/assets/images/caduceu-symbol.png" 
                alt="Barros & Associados" 
                className="h-10 w-10 mr-3 filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Barros & Associados</h3>
                <p className="text-sm text-primary-foreground/80">Contabilidade</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Muito mais que números, direcionamento para os seus sonhos. 
              Ética profissional e transparência em cada decisão.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Abrir Empresa Online</a></li>
              <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Trocar de Contador</a></li>
              <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Contabilidade Completa</a></li>
              <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Consultoria Fiscal</a></li>
              <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Folha de Pagamento</a></li>
              <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Consultoria Empresarial</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#como-funciona" className="hover:text-primary-foreground transition-colors">Como Funciona</a></li>
              <li><a href="#planos" className="hover:text-primary-foreground transition-colors">Planos e Preços</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <div>
                  <p>(31) 3333-4444</p>
                  <p>(31) 99999-8888</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <div>
                  <p>contato@barrosassociados.com.br</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1" />
                <div>
                  <p>Rua dos Contadores, 123</p>
                  <p>Centro - Belo Horizonte/MG</p>
                  <p>CEP: 30000-000</p>
                </div>
              </div>
            </div>

            {/* CRC */}
            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <h5 className="font-semibold mb-2">Registro Profissional</h5>
              <p className="text-sm text-primary-foreground/80">
                <strong>CRC/MG:</strong> 123456/O-7<br />
                <strong>Responsável:</strong> Adriane Rocha
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Barros & Associados Contabilidade. Todos os direitos reservados.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</a>
              <a href="#contato" className="hover:text-primary-foreground transition-colors">Ouvidoria</a>
            </div>
          </div>
          
          {/* Legacy */}
          <div className="text-center mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm">
              Fundada pelo Dr. William Giovanni Barros (in memoriam) • Continuando o legado de ética e profissionalismo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

