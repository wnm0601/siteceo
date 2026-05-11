"use client";

import { motion } from "framer-motion";

const techs = [
  "Python", "Machine Learning", "Deep Learning", "OpenCV", "YOLO", 
  "ROS2", "SLAM", "Nav2", "LiDAR", "Arduino", 
  "Raspberry Pi", "Jetson", "SQL", "Dashboard", "Sensor Fusion", 
  "FastAPI", "Next.js"
];

export default function Technology() {
  return (
    <section id="technology" className="section-padding bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Technology <span className="text-primary">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techs.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              transition={{ delay: index * 0.05 }}
              className="glass-card py-6 px-4 flex items-center justify-center text-center border-white/5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <span className="text-neutral-400 font-bold group-hover:text-white transition-colors">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/5 blur-[120px] pointer-events-none -z-10"></div>
      </div>
    </section>
  );
}
