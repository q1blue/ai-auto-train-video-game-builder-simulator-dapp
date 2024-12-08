import React from 'react';
import { Stats } from './components/Stats';
import { CinematicShowcase } from './components/CinematicShowcase';
import { ZodiacWheel } from './components/ZodiacWheel';
import { TechFeatures } from './components/TechFeatures';
import { QuantumRealm } from './components/QuantumRealm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Mystical Dashboard</h1>
          <p className="text-purple-200">Harness the power of the elements and AI</p>
        </header>

        {/* Stats Section */}
        <Stats />

        {/* Tech Features */}
        <TechFeatures />

        {/* Quantum Realm Visualization */}
        <QuantumRealm />

        {/* Cinematic Showcase */}
        <CinematicShowcase />

        {/* Zodiac Wheel */}
        <ZodiacWheel />
      </div>
    </div>
  );
}

export default App;