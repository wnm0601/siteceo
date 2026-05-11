"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Settings, Zap, Database, Cpu, ShieldAlert } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "기계 고장 예측 어려움", desc: "정확한 고장 시점을 예측하지 못해 발생하는 불필요한 유지보수 비용" },
  { icon: Zap, title: "공정 비효율", desc: "복잡한 생산 라인에서의 병목 현상 및 리소스 최적화 부재" },
  { icon: Settings, title: "로봇 제어 한계", desc: "고정된 동작의 한계를 넘어선 비정형 환경에서의 대응력 부족" },
  { icon: Database, title: "데이터 활용 부족", desc: "방대한 산업 데이터를 수집하지만 실질적인 통찰력을 얻지 못함" },
  { icon: Cpu, title: "센서 데이터 분석 어려움", desc: "다양한 이종 센서 데이터의 실시간 융합 및 분석 플랫폼 부재" },
  { icon: ShieldAlert, title: "자율주행 안정성 문제", desc: "복잡한 동적 장애물이 존재하는 환경에서의 주행 안정성 확보" },
];

export default function Problem() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white">Challenges in Industry</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            우리는 산업 현장에서 마주하게 되는 복잡하고 어려운 문제들을 AI와 하드웨어 제어 기술의 융합으로 해결합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 group hover:bg-white/5"
            >
              <item.icon className="w-12 h-12 text-primary/50 group-hover:text-primary mb-6 transition-colors" />
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-neutral-500 group-hover:text-neutral-300 transition-colors leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
