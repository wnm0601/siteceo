"use client";

import { motion } from "framer-motion";
import { Search, Database, Cpu, Bot, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, title: "Analyze", color: "blue" },
  { icon: Database, title: "Collect", color: "purple" },
  { icon: Cpu, title: "Model", color: "mint" },
  { icon: Bot, title: "Automate", color: "blue" },
  { icon: TrendingUp, title: "Optimize", color: "purple" },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            From <span className="text-primary">Data</span> to <span className="text-accent-mint">Automation</span>
          </h2>
        </div>

        <div className="relative flex flex-col lg:flex-row justify-between items-center max-w-5xl mx-auto gap-8 lg:gap-0">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-primary/20 via-white/10 to-accent-mint/20 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-3xl bg-background border border-white/10 flex items-center justify-center group-hover:border-primary transition-all duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <step.icon className="w-10 h-10 text-neutral-500 group-hover:text-primary transition-colors" />
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-muted border border-white/10 flex items-center justify-center text-xs font-black text-white">
                  0{index + 1}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-black uppercase text-neutral-400 group-hover:text-white transition-colors tracking-widest">
                {step.title}
              </h3>
              
              {/* Desktop Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-[105%] top-1/2 -translate-y-1/2 text-white/10 group-hover:text-primary/50 transition-colors">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative pulse effect */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/5 blur-lg animate-pulse-slow"></div>
    </section>
  );
}
