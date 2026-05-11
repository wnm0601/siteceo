"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-primary font-bold tracking-widest text-sm uppercase">About NeuraMotion</h3>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase italic">
                Building Intelligence <br />
                <span className="text-neutral-700">Beyond Software</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
              <p>
                기존 AI는 데이터를 분석하는 데 집중했지만, <br />
                <span className="text-white font-bold">Physical AI</span>는 현실 세계를 이해하고 직접 움직여야 합니다.
              </p>
              <p>
                우리는 로봇, 센서, 비전 AI, 자율주행 기술을 통해 실제 환경에서 동작 가능한 지능형 시스템을 구축합니다. 산업 현장의 한계를 넘어서는 지능적 자동화를 실현합니다.
              </p>
            </div>

            <button className="flex items-center space-x-4 text-white group pt-4">
              <span className="font-bold border-b border-white/20 group-hover:border-primary transition-colors">Our Vision</span>
              <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-primary" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 glass-card bg-gradient-to-br from-primary/10 to-transparent flex flex-col justify-end p-6">
                  <span className="text-5xl font-black text-primary/30">01</span>
                  <h4 className="text-xl font-bold mt-2">Analysis</h4>
                </div>
                <div className="h-48 glass-card bg-gradient-to-br from-accent-purple/10 to-transparent flex flex-col justify-end p-6">
                  <span className="text-5xl font-black text-accent-purple/30">02</span>
                  <h4 className="text-xl font-bold mt-2">Intelligence</h4>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-48 glass-card bg-gradient-to-br from-accent-mint/10 to-transparent flex flex-col justify-end p-6">
                  <span className="text-5xl font-black text-accent-mint/30">03</span>
                  <h4 className="text-xl font-bold mt-2">Control</h4>
                </div>
                <div className="h-64 glass-card bg-gradient-to-br from-white/5 to-transparent flex flex-col justify-end p-6">
                  <span className="text-5xl font-black text-white/10">04</span>
                  <h4 className="text-xl font-bold mt-2">Action</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
