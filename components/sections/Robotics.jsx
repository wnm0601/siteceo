"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Navigation, Zap, Activity } from "lucide-react";

const physicsTech = [
  { 
    title: "Vision AI", 
    icon: Eye,
    items: ["카메라 기반 객체 인식", "결함 자동 검출", "3D 공간 매핑"]
  },
  { 
    title: "Robotics Control", 
    icon: Cpu,
    items: ["ROS2 기반 로봇 제어", "정밀 매니퓰레이션", "다축 제어 최적화"]
  },
  { 
    title: "Autonomous Systems", 
    icon: Navigation,
    items: ["SLAM 기반 위치 추정", "동적 장애물 회피", "최적 경로 생성"]
  },
  { 
    title: "Sensor Intelligence", 
    icon: Zap,
    items: ["LiDAR 공간 인식", "센서 데이터 퓨전", "환경 실시간 모니터링"]
  },
  { 
    title: "Real-Time Decision Making", 
    icon: Activity,
    items: ["지연 시간 최소화", "엣지 디바이스 추론", "실시간 경로 수정"]
  }
];

export default function Robotics() {
  return (
    <section id="robotics" className="section-padding bg-background relative border-y border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-20 text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            Core <span className="text-accent-mint">Physical AI</span> Technologies
          </h2>
          <p className="text-neutral-500 max-w-2xl">
            가상 세계를 넘어 물리적 실체와의 상호작용을 위해 정교하게 설계된 NeuraMotion의 핵심 기술입니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          {physicsTech.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group flex flex-col items-center text-center hover:bg-accent-mint/5 hover:border-accent-mint/30"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-accent-mint/50">
                <tech.icon className="w-8 h-8 text-neutral-500 group-hover:text-accent-mint transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-accent-mint transition-colors">{tech.title}</h3>
              <ul className="space-y-3 text-sm text-neutral-500 w-full text-left">
                {tech.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-1 h-1 rounded-full bg-accent-mint opacity-50"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
