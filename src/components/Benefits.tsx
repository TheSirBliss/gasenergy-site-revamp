
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Clock, DollarSign, Headset, LayoutDashboard, ThumbsUp, Unlock, Wrench, FileText } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Bonus diretto", description: "Fino a 15€ al mese per ogni POD/PDR attivato." },
  { icon: LayoutDashboard, title: "Portale unico", description: "Visualizza e gestisci tutti i condomini da un unico posto." },
  { icon: BarChart3, title: "Rendicontazione", description: "Rendicontazione automatica mensile e annuale." },
  { icon: Headset, title: "Consulenza e supporto", description: "Il nostro team di esperti è sempre a tua disposizione 24/7." },
  { icon: ThumbsUp, title: "Nessuno stress", description: "Pensiamo a tutto noi, dalla A alla Z." },
  { icon: Wrench, title: "Assistenza tecnica", description: "Servizio di assistenza tecnica H24 (opzionale)." },
  { icon: Unlock, title: "Nessun vincolo", description: "Libertà di scegliere senza vincoli contrattuali." },
  { icon: Clock, title: "Rateizzazione", description: "Costi di attivazione dilazionabili fino a 6 rate." },
  { icon: FileText, title: "Consumi reali", description: "Fatturazione basata sui consumi reali, nessuna stima." },
];

const Benefits = () => {
  return (
    <section id="vantaggi" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Pensato per chi amministra. Ottimizzato per chi gestisce.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Scopri i vantaggi esclusivi che abbiamo pensato per semplificare il tuo lavoro e massimizzare i tuoi guadagni.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-background shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
