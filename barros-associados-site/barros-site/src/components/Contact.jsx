import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    businessType: '',
    contactPreference: 'call-me',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Mensagem enviada! Entraremos em contato em breve.');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar o futuro da sua empresa? Fale com nossos especialistas 
            e descubra como podemos ajudar você a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Fale com um Especialista
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Celular *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                  Em qual cidade sua empresa está situada? *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Cidade, Estado"
                />
              </div>

              {/* Business Type */}
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">
                  Descrição da atividade que você exercerá na empresa?
                </label>
                <textarea
                  id="businessType"
                  name="businessType"
                  rows={3}
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Descreva brevemente sua atividade empresarial"
                />
              </div>

              {/* Contact Preference */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Prefere entrar em contato conosco ou que entremos em contato com você?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="call-me"
                      checked={formData.contactPreference === 'call-me'}
                      onChange={handleInputChange}
                      className="mr-3 text-primary focus:ring-primary"
                    />
                    <span className="text-muted-foreground">Que vocês entrem em contato comigo</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="i-call"
                      checked={formData.contactPreference === 'i-call'}
                      onChange={handleInputChange}
                      className="mr-3 text-primary focus:ring-primary"
                    />
                    <span className="text-muted-foreground">Prefiro entrar em contato com vocês</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem Adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold">
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(31) 3333-4444</p>
                    <p className="text-muted-foreground">(31) 99999-8888</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground">contato@barrosassociados.com.br</p>
                    <p className="text-muted-foreground">adriane@barrosassociados.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua dos Contadores, 123<br />
                      Centro - Belo Horizonte/MG<br />
                      CEP: 30000-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CRC Information */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <img 
                  src="/src/assets/images/caduceu-symbol.png" 
                  alt="CRC" 
                  className="h-6 w-6 mr-3"
                />
                Registro Profissional
              </h4>
              <p className="text-muted-foreground text-sm">
                <strong>CRC/MG:</strong> 123456/O-7<br />
                <strong>Responsável Técnico:</strong> Adriane Rocha<br />
                <strong>Registro ativo</strong> no Conselho Regional de Contabilidade
              </p>
            </div>

            {/* Ouvidoria */}
            <div className="bg-muted/30 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Ouvidoria</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Para sugestões, reclamações ou elogios, entre em contato com nossa ouvidoria:
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>E-mail:</strong> ouvidoria@barrosassociados.com.br
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

