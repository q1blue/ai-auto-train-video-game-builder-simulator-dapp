import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Brain, Database } from 'lucide-react';

interface TechCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  performance: string;
}

function TechCard({ title, description, icon, performance }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-purple-200 mb-4">{description}</p>
      <div className="bg-white/5 rounded-lg p-3">
        <p className="text-green-400 font-semibold">{performance}</p>
      </div>
    </motion.div>
  );
}

export function TechFeatures() {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Advanced Technology Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TechCard
          title="NVIDIA DLSS 3.5"
          description="Next-gen AI upscaling and frame generation for ultra-smooth gameplay"
          icon={<Cpu className="w-6 h-6 text-blue-400" />}
          performance="Up to 4x performance boost"
        />
        <TechCard
          title="NVIDIA ACE"
          description="Advanced character expressions powered by AI for realistic NPC interactions"
          icon={<Brain className="w-6 h-6 text-purple-400" />}
          performance="Real-time character responses"
        />
        <TechCard
          title="NVIDIA NIMS"
          description="Neural inverse material scattering for photorealistic materials"
          icon={<Zap className="w-6 h-6 text-yellow-400" />}
          performance="Physical accuracy: 99.9%"
        />
        <TechCard
          title="Mage AI Pipeline"
          description="Advanced data processing for dynamic world generation"
          icon={<Database className="w-6 h-6 text-green-400" />}
          performance="10TB/hour processing"
        />
      </div>
    </div>
  );
}