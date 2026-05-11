import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 relative z-10">
          <div className="col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Cpu className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tighter gradient-text uppercase">
                NeuraMotion AI
              </span>
            </Link>
            <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
              NeuraMotion AI는 산업 현장의 움직임을 지능화하고, 현실 세계와 완벽하게 상호작용하는 Physical AI를 연구합니다. 로봇과 데이터, 그리고 자동화의 미래를 연결합니다.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Links</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#solutions" className="hover:text-primary transition-colors">Our Solutions</Link></li>
              <li><Link href="#technology" className="hover:text-primary transition-colors">Technology Stack</Link></li>
              <li><Link href="#projects" className="hover:text-primary transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Social</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Medium</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-600">
            © 2024 NeuraMotion AI. All rights reserved.
          </p>
          <div className="flex space-x-8 text-xs text-neutral-600 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Background Decorative element */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
    </footer>
  );
}
