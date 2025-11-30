'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Shield, Key, Fingerprint, WifiOff, EyeOff, Timer,
  Star, Search, Gauge, Dice6, FolderOpen, Palette,
  ScanSearch, FileUp, FileDown, Moon, Paintbrush, Sparkles
} from 'lucide-react'

const features = {
  security: [
    {
      icon: Shield,
      title: 'AES-256-GCM Encryption',
      description: 'Military-grade encryption protects all your sensitive data',
      color: 'from-primary to-accent',
    },
    {
      icon: Key,
      title: 'PBKDF2-SHA256 Key Derivation',
      description: '10,000 iterations for maximum security against brute force',
      color: 'from-secondary to-primary',
    },
    {
      icon: Fingerprint,
      title: 'Biometric Authentication',
      description: 'Face ID & Fingerprint support for quick, secure access',
      color: 'from-accent to-secondary',
    },
    {
      icon: WifiOff,
      title: '100% Offline',
      description: 'Your data never leaves your device. No internet required',
      color: 'from-success to-secondary',
    },
    {
      icon: EyeOff,
      title: 'Zero Knowledge',
      description: 'We never see your passwords. Even we can\'t access your data',
      color: 'from-primary to-secondary',
    },
    {
      icon: Timer,
      title: 'Auto-Lock',
      description: 'Automatic vault protection when your device is idle',
      color: 'from-warning to-danger',
    },
  ],
  core: [
    {
      icon: Star,
      title: 'Favorites',
      description: 'Quick access to your most-used passwords',
      color: 'from-warning to-primary',
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find any password instantly with powerful search',
      color: 'from-accent to-primary',
    },
    {
      icon: Gauge,
      title: 'Password Strength Meter',
      description: 'Visual security feedback for all your passwords',
      color: 'from-secondary to-success',
    },
    {
      icon: Dice6,
      title: 'Password Generator',
      description: 'Create strong, unique passwords with one tap',
      color: 'from-primary to-accent',
    },
    {
      icon: FolderOpen,
      title: 'Categories',
      description: 'Organize by Social, Finance, Work, Shopping & more',
      color: 'from-secondary to-primary',
    },
    {
      icon: Palette,
      title: 'Custom Icons',
      description: 'Personalize your entries with beautiful icons',
      color: 'from-accent to-secondary',
    },
  ],
  advanced: [
    {
      icon: ScanSearch,
      title: 'Security Audit',
      description: 'Identify weak, reused, and old passwords',
      color: 'from-danger to-warning',
    },
    {
      icon: FileUp,
      title: 'Encrypted Export',
      description: 'Secure backup with password protection',
      color: 'from-primary to-accent',
    },
    {
      icon: FileDown,
      title: 'Import Support',
      description: 'Migrate from other password managers easily',
      color: 'from-secondary to-primary',
    },
    {
      icon: Moon,
      title: 'Dark/Light Themes',
      description: 'Beautiful UI for any preference',
      color: 'from-accent to-secondary',
    },
    {
      icon: Paintbrush,
      title: 'Material Design 3',
      description: 'Modern, intuitive interface design',
      color: 'from-primary to-secondary',
    },
    {
      icon: Sparkles,
      title: 'More Coming Soon',
      description: 'Cloud sync, browser extension & more in future updates',
      color: 'from-secondary to-accent',
    },
  ],
}

const FeatureCard = ({ feature, index }: { feature: typeof features.security[0], index: number }) => {
  const Icon = feature.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-6 rounded-2xl bg-dark-card/50 border border-white/5 hover:border-primary/30 transition-all duration-300"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-4`}>
        <div className="w-full h-full bg-dark-card rounded-xl flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      
      {/* Content */}
      <h3 className="relative text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
        {feature.title}
      </h3>
      <p className="relative text-gray-400 text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute inset-0 mesh-bg opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Packed with Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need.{' '}
            <span className="gradient-text">Nothing You Don&apos;t.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            VaultLock combines powerful security with intuitive design, giving you complete control over your digital identity.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Security First</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {features.security.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Core Features</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {features.core.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Advanced Features */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Advanced Features</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {features.advanced.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
