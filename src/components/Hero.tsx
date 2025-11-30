'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Download, Github, ChevronDown, Sparkles, Zap, CheckCircle } from 'lucide-react'

export default function Hero() {
  const floatingBadges = [
    { icon: Shield, label: 'AES-256', color: 'from-primary to-accent' },
    { icon: Lock, label: 'Zero Knowledge', color: 'from-secondary to-primary' },
    { icon: Zap, label: 'Offline First', color: 'from-accent to-secondary' },
    { icon: CheckCircle, label: 'Open Source', color: 'from-success to-secondary' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dark-bg dark:bg-dark-bg">
        {/* Mesh Gradient */}
        <div className="absolute inset-0 mesh-bg opacity-60" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 animated-grid opacity-30" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm text-gray-300">Version 2.0.0 Now Available</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Your Passwords.</span>
              <br />
              <span className="gradient-text">Your Control.</span>
              <br />
              <span className="text-white">Zero Compromise.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              The most secure, offline password manager. Military-grade AES-256-GCM encryption. 
              No servers. No subscriptions. <span className="text-secondary font-semibold">100% private.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-primary via-primary to-accent text-white font-semibold rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/Bhargavvz/VaultLock"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start"
            >
              {['Android', 'iOS (Coming Soon)'].map((platform, index) => (
                <div
                  key={platform}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    index === 0 ? 'bg-success/10 text-success' : 'bg-white/5 text-gray-400'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{platform}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Floating Badges */}
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className={`absolute hidden lg:flex ${
                  index === 0 ? 'top-10 -left-10' :
                  index === 1 ? 'top-1/4 -right-10' :
                  index === 2 ? 'bottom-1/4 -left-10' :
                  'bottom-10 -right-10'
                }`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} shadow-lg`}
                >
                  <badge.icon className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">{badge.label}</span>
                </motion.div>
              </motion.div>
            ))}

            {/* Phone Mockup */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="phone-mockup">
                <div className="screen">
                  {/* App UI Mockup */}
                  <div className="p-4 pt-10">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-xs text-gray-500">9:41</div>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-gray-600 rounded-sm" />
                        <div className="w-4 h-2 bg-gray-600 rounded-sm" />
                        <div className="w-6 h-3 bg-success rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">VaultLock</div>
                          <div className="text-xs text-gray-500">24 passwords</div>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-white/5 rounded-lg" />
                    </div>

                    {/* Search Bar */}
                    <div className="bg-white/5 rounded-xl p-3 mb-4">
                      <div className="text-gray-500 text-sm">🔍 Search passwords...</div>
                    </div>

                    {/* Password Entries */}
                    {[
                      { name: 'Google', icon: '🔵', category: 'Social' },
                      { name: 'GitHub', icon: '⚫', category: 'Work' },
                      { name: 'Netflix', icon: '🔴', category: 'Entertainment' },
                      { name: 'Bank App', icon: '🟢', category: 'Finance' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-xl mb-2"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-xl">{item.icon}</div>
                          <div>
                            <div className="text-white text-sm font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.category}</div>
                          </div>
                        </div>
                        <div className="text-gray-500">›</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow behind phone */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-[80px] scale-150" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
