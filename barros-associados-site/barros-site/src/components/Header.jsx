import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/src/assets/images/icones.png"
              alt="Barros & Associados"
              className="h-10 w-10 mr-3"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">
                Barros & Associados
              </h1>
              <p className="text-xs text-muted-foreground">Contabilidade</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </a>
            <a
              href="#como-funciona"
              className="text-foreground hover:text-primary transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#planos"
              className="text-foreground hover:text-primary transition-colors"
            >
              Planos
            </a>
            <a
              href="#contato"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#inicio"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={toggleMenu}
              >
                Início
              </a>
              <a
                href="#sobre"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={toggleMenu}
              >
                Sobre Nós
              </a>
              <a
                href="#servicos"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={toggleMenu}
              >
                Serviços
              </a>
              <a
                href="#como-funciona"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={toggleMenu}
              >
                Como Funciona
              </a>
              <a
                href="#planos"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={toggleMenu}
              >
                Planos
              </a>
              <a
                href="#contato"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={toggleMenu}
              >
                Contato
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
