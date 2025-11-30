'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Star, GitFork, Users, Heart, ExternalLink } from 'lucide-react'

export default function OpenSource() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Star, label: 'Stars', value: '⭐', description: 'Star us on GitHub' },
    { icon: GitFork, label: 'Forks', value: '🍴', description: 'Fork and contribute' },
    { icon: Users, label: 'Contributors', value: '👥', description: 'Join the community' },
  ]

  return (
    <section id="open-source" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-surface">
        <div className="absolute inset-0 mesh-bg opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4 text-danger" />
            Open Source & Community Driven
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Built with{' '}
            <span className="text-danger">❤️</span>{' '}
            by the{' '}
            <span className="gradient-text">Community</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
          >
            VaultLock is 100% open source under the MIT license. View the code, report issues, suggest features, or contribute to make password security accessible to everyone.
          </motion.p>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-6 rounded-2xl bg-dark-card/50 border border-white/5 hover:border-primary/20 transition-all min-w-[140px]"
                >
                  <Icon className="w-6 h-6 text-primary mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.description}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="https://github.com/Bhargavvz/VaultLock"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-white text-dark-bg font-semibold rounded-full hover:bg-gray-100 transition-all"
            >
              <Star className="w-5 h-5" />
              <span>Star on GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/Bhargavvz/VaultLock/fork"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-dark-card border border-white/10 text-white font-semibold rounded-full hover:border-primary/30 transition-all"
            >
              <GitFork className="w-5 h-5" />
              <span>Fork & Contribute</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/Bhargavvz/VaultLock"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-dark-card border border-white/10 text-white font-semibold rounded-full hover:border-primary/30 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Source Code</span>
            </motion.a>
          </motion.div>

          {/* License Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
              <Github className="w-4 h-4" />
              MIT License - Free to use, modify, and distribute
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
