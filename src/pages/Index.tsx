
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Assistance from "@/components/Assistance";
import Pricing from "@/components/Pricing";
import Cta from "@/components/Cta";
import Contract from "@/components/Contract";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Features />
        <Assistance />
        <Pricing />
        <Cta />
        <Contract />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
