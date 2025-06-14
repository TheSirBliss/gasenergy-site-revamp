
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-primary to-blue-700 text-primary-foreground">
      <div className="container py-20 md:py-32 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Con <span className="text-secondary">GAS&ENERGY</span> la gestione delle forniture condominiali diventa semplice e vantaggiosa.
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Offerte su misura per ogni condominio, portale dedicato e <strong>fino a 15€/mese</strong> per ogni utenza attivata. Gestisci tutto con un solo referente, senza stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <a href="#contatti">Richiedi una consulenza gratuita</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Simula il tuo guadagno
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070" alt="Amministratore soddisfatto" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
