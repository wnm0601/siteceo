"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Globe, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-background relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-tight">
                Let's Build the <br />
                <span className="gradient-text">Future</span> of AI <br />
                Automation
              </h2>
              <p className="text-neutral-500 text-lg max-w-md">
                프로젝트 협업, 자동화 컨설팅, 기술 문의 등 여러분의 산업 혁신을 위한 준비가 되어 있습니다.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-neutral-400 hover:text-white transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-neutral-600">Location</p>
                  <p className="font-bold">Republic of Korea, Seoul Digital Complex</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-neutral-400 hover:text-white transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-neutral-600">Email</p>
                  <p className="font-bold">contact@neuramotion.ai</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-xl bg-muted border border-white/5 flex items-center justify-center text-neutral-500 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-neutral-500 ml-1">Name</label>
                  <input type="text" className="w-full bg-muted/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-neutral-500 ml-1">Email</label>
                  <input type="email" className="w-full bg-muted/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="email@address.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-neutral-500 ml-1">Inquiry Type</label>
                <select className="w-full bg-muted/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary appearance-none transition-colors">
                  <option>Project Inquiry</option>
                  <option>Automation Consultation</option>
                  <option>Technical Partnership</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-neutral-500 ml-1">Message</label>
                <textarea rows={5} className="w-full bg-muted/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-white font-black uppercase tracking-[0.2em] rounded-xl hover:bg-primary-dark transition-all flex items-center justify-center space-x-3 shadow-[0_10px_30px_rgba(59,130,246,0.2)]">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
