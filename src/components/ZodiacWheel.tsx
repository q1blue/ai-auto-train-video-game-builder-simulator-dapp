import React from 'react';
import { motion } from 'framer-motion';

const zodiacSigns = [
  { name: 'Aries', element: 'Fire', ruling: 'Mars' },
  { name: 'Taurus', element: 'Earth', ruling: 'Venus' },
  { name: 'Gemini', element: 'Air', ruling: 'Mercury' },
  { name: 'Cancer', element: 'Water', ruling: 'Moon' },
  { name: 'Leo', element: 'Fire', ruling: 'Sun' },
  { name: 'Virgo', element: 'Earth', ruling: 'Mercury' },
  { name: 'Libra', element: 'Air', ruling: 'Venus' },
  { name: 'Scorpio', element: 'Water', ruling: 'Pluto' },
  { name: 'Sagittarius', element: 'Fire', ruling: 'Jupiter' },
  { name: 'Capricorn', element: 'Earth', ruling: 'Saturn' },
  { name: 'Aquarius', element: 'Air', ruling: 'Uranus' },
  { name: 'Pisces', element: 'Water', ruling: 'Neptune' }
];

export function ZodiacWheel() {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Celestial Alignments</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {zodiacSigns.map((sign, index) => (
          <motion.div
            key={sign.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
          >
            <h3 className="text-xl font-bold mb-2">{sign.name}</h3>
            <p className="text-purple-200">Element: {sign.element}</p>
            <p className="text-purple-200">Ruling: {sign.ruling}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}