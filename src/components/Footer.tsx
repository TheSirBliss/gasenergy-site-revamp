
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contatti" className="bg-slate-900 text-slate-400">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <Zap className="h-6 w-6 text-secondary" />
              <span>GAS&ENERGY</span>
            </a>
            <p className="text-sm">© 2025 GAS&ENERGY Consulting – Partner affiliato Optima Italia S.p.A.</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Link Utili</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white">Termini e Condizioni</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Partner</h3>
             <a href="https://www.optimaitalia.com" target="_blank" rel="noopener noreferrer">
              <p className="text-sm">Optima Italia</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

