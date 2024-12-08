import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

export function CinematicShowcase() {
  const trailerUrl = "https://player.vimeo.com/video/123456789";
  
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Cinematic Universe</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Latest Trailer</h3>
          <div className="aspect-video rounded-lg overflow-hidden">
            <ReactPlayer
              url={trailerUrl}
              width="100%"
              height="100%"
              controls
              light
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <ImageCard
            title="Celestial Realm"
            imageUrl="https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
          />
          <ImageCard
            title="Quantum Portal"
            imageUrl="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986"
          />
          <ImageCard
            title="Astral Plane"
            imageUrl="https://images.unsplash.com/photo-1543722530-d2c3201371e7"
          />
          <ImageCard
            title="Sacred Geometry"
            imageUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          />
        </motion.div>
      </div>
    </div>
  );
}

function ImageCard({ title, imageUrl }: { title: string; imageUrl: string }) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <p className="text-white p-4 font-medium">{title}</p>
      </div>
    </div>
  );
}