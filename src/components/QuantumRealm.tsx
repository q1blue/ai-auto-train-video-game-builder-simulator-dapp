import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

function CrystalStructure() {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial
        color="#4f46e5"
        transmission={0.9}
        roughness={0.1}
        metalness={0.5}
      />
    </mesh>
  );
}

export function QuantumRealm() {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Quantum Realm Visualization</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-[400px] bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars />
          <CrystalStructure />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
          <h3 className="font-bold mb-2">Crystal Lattice</h3>
          <p className="text-purple-200">Dynamic quantum crystalline structures</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
          <h3 className="font-bold mb-2">Quantum Fields</h3>
          <p className="text-purple-200">Interactive probability waves</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
          <h3 className="font-bold mb-2">Entanglement</h3>
          <p className="text-purple-200">Real-time quantum state visualization</p>
        </div>
      </div>
    </div>
  );
}