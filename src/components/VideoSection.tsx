import { motion } from "motion/react";
import { Frame } from "./Frame";

export function VideoSection() {
  return (
    <section className="bg-[#111] py-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full text-center mb-12"
        >
          <Frame theme="light" className="inline-block py-6 px-12">
             <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tighter text-white">
               Filmes e Momentos
             </h2>
             <div className="h-px bg-stone-700 w-12 mt-4 mx-auto" />
          </Frame>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full relative aspect-video bg-[#1a1a1a] rounded overflow-hidden shadow-xl"
        >
          {/* Use a placeholder video or iframe here. Let's use an iframe for youtube/vimeo or a standard video tag */}
          <video 
            className="w-full h-full object-cover" 
            controls 
            poster="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2000"
          >
             <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
             Seu navegador não suporta vídeos HTML5.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
