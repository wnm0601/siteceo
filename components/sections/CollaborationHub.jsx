"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Plus, 
  MessageSquare, 
  ThumbsUp, 
  Bookmark, 
  Eye, 
  Filter,
  FileText,
  Image as ImageIcon,
  Video,
  FileCode,
  Paperclip,
  Loader2
} from "lucide-react";
import { db, auth } from "../../lib/firebase";
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  serverTimestamp, 
  where 
} from "firebase/firestore";

const categories = ["All", "Automation", "Robotics", "Vision AI", "ROS2", "Sensor Data", "AI Development", "Technical Question"];

export default function CollaborationHub() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const postsRef = collection(db, "posts");
    let q = query(postsRef, orderBy("createdAt", "desc"));
    
    if (activeCategory !== "All") {
      q = query(postsRef, where("category", "==", activeCategory), orderBy("createdAt", "desc"));
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
      setLoading(false);
    }, (error) => {
      console.error("Firestore error:", error);
      // Fallback to empty if error (e.g. no config)
      setLoading(false);
    });

    return () => unsubscribe();
  }, [activeCategory]);

  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="hub" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
              AI Collaboration <span className="text-primary">Hub</span>
            </h2>
            <p className="text-neutral-500">산업 AI 전문 기술 공유 및 협업 플랫폼 (Firebase Cloud Connect)</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              <input 
                type="text" 
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-3 bg-muted/50 border border-white/5 rounded-full text-sm focus:outline-none focus:border-primary/50 transition-colors w-64 md:w-80"
              />
            </div>
            <button className="p-3 bg-primary rounded-full text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto pb-6 mb-8 no-scrollbar gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat 
                ? "bg-primary text-white" 
                : "bg-muted/30 text-neutral-500 border border-white/5 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main List */}
          <div className="lg:col-span-2 space-y-4">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-card group p-6 hover:bg-white/5 border-white/5"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-[10px] font-black uppercase text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                          {post.category}
                        </span>
                        {post.isPopular && (
                          <span className="text-[10px] font-black uppercase text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded border border-accent-purple/20">
                            Popular
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 text-[10px] text-neutral-500 uppercase tracking-widest font-black">
                    {post.tags?.map(tag => <span key={tag}>#{tag}</span>)}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center space-x-6 text-sm text-neutral-500">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>{post.views?.toLocaleString() || 0}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.comments || 0}</span>
                      </div>
                      <div className="flex items-center space-x-2 group/like cursor-pointer hover:text-primary transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{post.likes || 0}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent-purple"></div>
                      <span className="text-xs text-neutral-400">{post.author}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="glass-card p-20 text-center text-neutral-500">
                <p>게시글이 없습니다. 첫 번째 프로젝트 협업을 제안해보세요!</p>
              </div>
            )}
          </div>


          {/* Sidebar / Upload Area */}
          <div className="space-y-6">
            <div className="glass-card p-8 border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center space-y-4 group hover:border-primary/50 transition-colors cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-neutral-500 group-hover:text-primary transition-colors">
                <Plus className="w-8 h-8" />
              </div>
              <div>
                <p className="text-white font-bold">Upload Project</p>
                <p className="text-xs text-neutral-500 mt-1">Drag and drop files here</p>
              </div>
              <div className="flex gap-2">
                <ImageIcon className="w-4 h-4 text-neutral-600" />
                <Video className="w-4 h-4 text-neutral-600" />
                <FileCode className="w-4 h-4 text-neutral-600" />
                <Paperclip className="w-4 h-4 text-neutral-600" />
              </div>
            </div>

            <div className="glass-card p-6 border-white/5">
              <h4 className="text-sm font-black uppercase text-white mb-6 flex items-center justify-between">
                <span>Top Resources</span>
                <Filter className="w-4 h-4 text-neutral-500" />
              </h4>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-neutral-500 text-sm font-bold group-hover:bg-primary/20 group-hover:text-primary transition-all">
                      {i}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-xs text-white font-bold line-clamp-1 group-hover:text-primary transition-colors">
                        Industrial Robotics Dataset v2.4 (Korean)
                      </p>
                      <p className="text-[10px] text-neutral-500">4.2 GB • JSON/CSV</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
