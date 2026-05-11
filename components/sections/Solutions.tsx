"use client";

import { motion } from "framer-motion";
import { BarChart3, Bot, Activity, Eye, Navigation, Share2, Lightbulb } from "lucide-react";

const solutions = [
  { 
    icon: BarChart3, 
    title: "AI 데이터 분석", 
    desc: "빅데이터 기반의 인사이트 도출 및 의사결정 지원 시스템",
    color: "blue"
  },
  { 
    icon: Bot, 
    title: "로봇 자동화 솔루션", 
    desc: "인간과 협업하거나 자율적으로 작업을 수행하는 로봇 제어",
    color: "purple"
  },
  { 
    icon: Activity, 
    title: "기계·공정 예지보전", 
    desc: "센서 데이터를 통한 고장 사전 감지 및 가동률 극대화",
    color: "mint"
  },
  { 
    icon: Eye, 
    title: "Vision AI 시스템", 
    desc: "객체 인식, 결함 검출, 작업자 안전 모니터링 시스템",
    color: "blue"
  },
  { 
    icon: Navigation, 
    title: "자율주행 시스템", 
    desc: "실내외 정밀 맵핑 및 자율 이동 로봇(AMR) 솔루션",
    color: "purple"
  },
  { 
    icon: Share2, 
    title: "Sensor Fusion", 
    desc: "LiDAR, RADAR, 카메라 등 이종 센서 통합 데이터 처리",
    color: "mint"
  },
  { 
    icon: Lightbulb, 
    title: "AI 개발 방향성 컨설팅", 
    desc: "맞춤형 AI 도입 전략 수립 및 기술 아키텍처 제안",
    color: "blue"
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-background relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-widest italic">
              Future-Ready <br />
              <span className="gradient-text">Solutions</span>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-md text-right">
            단순 분석을 넘어 현실 세계의 물리적 변화를 
            이끌어내는 NeuraMotion AI의 핵심 솔루션입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group p-8 border border-white/5 bg-muted/20 hover:bg-muted/40 transition-all duration-500 relative overflow-hidden h-[300px] flex flex-col justify-between ${
                index === 6 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="space-y-6 z-10">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all`}>
                  <item.icon className="w-6 h-6 text-neutral-400 group-hover:text-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-300">
                    {item.desc}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end z-10">
                <button className="text-xs uppercase tracking-widest font-black text-neutral-600 transition-colors group-hover:text-white">
                  Learn More
                </button>
              </div>

              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <item.icon className="w-24 h-24 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
