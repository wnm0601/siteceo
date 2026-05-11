"use client";

import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-hero-gradient">
      {/* Background visual elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[128px] animate-pulse-slow delayed-animation"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-primary uppercase">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
            <span>Leading Industrial AI Innovation</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white uppercase tracking-tighter">
            Physical AI for<br />
            <span className="gradient-text">Intelligent</span><br />
            Automation
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-xl">
            로봇, 기계, 제어 시스템, 센서 데이터를 AI로 분석하여 자동화 방향을 제시하고 
            실제 구현 가능한 솔루션으로 연결합니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-xl bg-primary text-white font-bold flex items-center space-x-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transition-transform duration-300 translate-x-[-100%] group-hover:translate-x-[100%] skew-x-12"></div>
              <span>Our Solutions</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ opacity: 0.8 }}
              className="flex items-center space-x-3 text-white font-semibold"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <Play className="w-4 h-4 text-primary fill-primary" />
              </div>
              <span>View Projects</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 glass-card p-2 overflow-hidden aspect-square flex items-center justify-center">
            <img
              src="/hero.png"
              alt="Futuristic Robot AI"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
            {/* Overlay holographic elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Floating decorative cards */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass-card p-6 shadow-2xl z-20 backdrop-blur-2xl"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">98%</span>
              </div>
              <div className="text-xs">
                <p className="text-neutral-400">Accuracy</p>
                <p className="text-white font-bold">Object Detection</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 glass-card p-6 shadow-2xl z-20 backdrop-blur-2xl"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-accent-mint/20 flex items-center justify-center">
                <span className="text-accent-mint font-bold">2.4ms</span>
              </div>
              <div className="text-xs">
                <p className="text-neutral-400">Latency</p>
                <p className="text-white font-bold">Real-time Control</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Discover</span>
      </motion.div>
    </section>
  );
}
