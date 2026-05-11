"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI 쓰레기 수거 및 분류 로봇",
    tags: ["YOLO", "LiDAR", "ROS2", "Robot Arm", "자율주행"],
    desc: "도심 환경에서 자율 주행하며 객체를 인식하고 집게형 로봇팔을 이용해 자동으로 쓰레기를 수거 및 분류하는 시스템입니다.",
    image: "/project1.png"
  },
  {
    title: "센서 데이터 기반 기계 상태 분석 시스템",
    tags: ["센서 데이터 분석", "이상 감지", "예지보전"],
    desc: "공정 내 모터 및 샤프트의 진동/온도 데이터를 실시간 분석하여 고장 징후를 사전에 포착하고 정비 시점을 제안합니다.",
    image: "/project2.png"
  },
  {
    title: "AI 기반 개발 방향성 추천 시스템",
    tags: ["프로젝트 분석", "AI 모델 추천", "하드웨어 구성"],
    desc: "사용자의 산업 요구사항을 입력받아 최적의 AI 모델과 하드웨어 구성을 AI가 추천해주는 컨설팅 엔진입니다.",
    image: "/project3.png"
  },
  {
    title: "AI Mobile Robot",
    tags: ["SLAM", "자율주행", "장애물 회피", "맵핑"],
    desc: "실내 정밀 지도를 생성하고 복잡한 장애물을 회피하며 목적지까지 최적 경로로 이동하는 자율 주행 모바일 플랫폼입니다.",
    image: "/project4.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            Real AI <br />
            <span className="text-primary">& Robotics</span> Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group border-white/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-primary transition-colors cursor-pointer text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-primary transition-colors cursor-pointer text-white">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <button className="w-full py-4 border border-white/5 rounded-xl bg-white/5 hover:bg-primary transition-all font-bold text-sm tracking-widest uppercase text-neutral-400 hover:text-white">
                  Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
