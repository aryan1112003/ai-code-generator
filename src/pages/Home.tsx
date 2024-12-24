import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Wand2, Rocket } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Transform Your Ideas Into Code
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Generate beautiful, creative, and responsive frontend code using AI. 
          Just describe what you want, and watch the magic happen.
        </p>
        <Link
          to="/editor"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Start Creating
        </Link>
      </motion.section>

      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Code className="w-8 h-8 text-blue-500" />,
            title: "AI-Powered Code Generation",
            description: "Convert natural language descriptions into beautiful, production-ready code."
          },
          {
            icon: <Wand2 className="w-8 h-8 text-purple-500" />,
            title: "Creative Designs",
            description: "Generate unique and aesthetic designs with modern layouts and animations."
          },
          {
            icon: <Rocket className="w-8 h-8 text-pink-500" />,
            title: "Instant Preview",
            description: "See your changes in real-time with our live preview feature."
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default Home;