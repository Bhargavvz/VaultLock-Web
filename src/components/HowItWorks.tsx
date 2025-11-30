'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, Fingerprint, Plus, Shield, Lock } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Download & Install',
    description: 'Get VaultLock from our website or app stores. The app is under 52MB and installs in seconds.',
    color: 'from-primary to-accent',
  },
  {
    number: '02',
    icon: Lock,
    title: 'Create Master Password',
    description: 'Choose a strong master password. This is your only key to the vault - make it memorable but secure.',
    color: 'from-secondary to-primary',
  },
  {
    number: '03',
    icon: Fingerprint,
    title: 'Enable Biometrics',
    description: 'Optionally enable Face ID or Fingerprint for quick, secure access without typing your password.',
    color: 'from-accent to-secondary',
  },
  {
    number: '04',
    icon: Plus,
    title: 'Add Your Passwords',
    description: 'Store all your credentials securely. Use our password generator for unbreakable new passwords.',
    color: 'from-primary to-secondary',
  },
  {
    number: '05',
    icon: Shield,
    title: 'Stay Protected',
    description: 'Auto-lock and encrypted storage keep you safe. Run security audits to find weak passwords.',
    color: 'from-success to-secondary',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute inset-0 mesh-bg opacity-20" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
          >
            <Download className="w-4 h-4" />
            Get Started in Minutes
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple.{' '}
            <span className="gradient-text">Secure.</span>{' '}
            Setup.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get up and running in just 5 easy steps. No account creation, no cloud sync, no complicated setup.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 items-center ${
                    index !== steps.length - 1 ? 'lg:mb-16' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'lg:pr-16 lg:text-right' : 'lg:order-2 lg:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 rounded-2xl bg-dark-card/50 border border-white/5 hover:border-primary/20 transition-all ${
                        isEven ? 'lg:ml-auto' : ''
                      } max-w-md`}
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} p-0.5`}>
                          <div className="w-full h-full bg-dark-card rounded-xl flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="text-primary text-sm font-medium">Step {step.number}</div>
                          <h3 className="text-white text-lg font-semibold">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-400">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Number */}
                  <div className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 ${
                    isEven ? '' : 'lg:order-1'
                  }`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                      className="w-16 h-16 rounded-full bg-dark-card border-2 border-primary flex items-center justify-center shadow-glow z-10"
                    >
                      <span className="text-2xl font-bold gradient-text">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Empty div for grid alignment */}
                  <div className={`hidden lg:block ${isEven ? 'lg:order-2' : 'lg:order-1'}`} />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-glow hover:shadow-glow-lg transition-all"
          >
            <Download className="w-5 h-5" />
            <span>Start Securing Your Passwords</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
