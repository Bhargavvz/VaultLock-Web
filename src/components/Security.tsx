'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Lock, Database, Server, Key, ArrowRight, CheckCircle, XCircle } from 'lucide-react'

const encryptionSteps = [
  { icon: Key, label: 'Master Password', description: 'Your secret key' },
  { icon: Shield, label: 'PBKDF2', description: '10,000 iterations' },
  { icon: Lock, label: '256-bit Key', description: 'Derived key' },
  { icon: Shield, label: 'AES-GCM', description: 'Encryption' },
  { icon: Database, label: 'Encrypted Data', description: 'Secure storage' },
  { icon: Server, label: 'Local SQLite', description: 'On your device' },
]

const securityStats = [
  { value: '256', label: 'Bit Encryption', suffix: '-bit' },
  { value: '10K', label: 'PBKDF2 Iterations', suffix: '' },
  { value: '0', label: 'Cloud Servers', suffix: '' },
  { value: '100%', label: 'Open Source', suffix: '' },
]

const comparisonData = [
  { feature: 'Works Offline', vaultlock: true, cloud: false },
  { feature: 'No Account Required', vaultlock: true, cloud: false },
  { feature: 'Zero Knowledge', vaultlock: true, cloud: 'partial' },
  { feature: 'Data Stays Local', vaultlock: true, cloud: false },
  { feature: 'No Subscription', vaultlock: true, cloud: false },
  { feature: 'Open Source', vaultlock: true, cloud: 'partial' },
  { feature: 'AES-256 Encryption', vaultlock: true, cloud: true },
  { feature: 'Biometric Auth', vaultlock: true, cloud: true },
]

export default function Security() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="security" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg">
        <div className="absolute inset-0 mesh-bg opacity-20" />
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6"
          >
            <Shield className="w-4 h-4" />
            Bank-Grade Security
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Data is{' '}
            <span className="gradient-text">Fort Knox Secure</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Military-grade encryption ensures your passwords are protected by the same standards used by governments and financial institutions.
          </p>
        </motion.div>

        {/* Encryption Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-xl font-semibold text-white text-center mb-10">How Your Data is Protected</h3>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2" />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-2">
              {encryptionSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="relative flex flex-col items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative z-10 w-16 h-16 rounded-2xl bg-dark-card border border-white/10 flex items-center justify-center shadow-lg mb-3"
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div className="text-center">
                      <div className="text-white font-medium text-sm">{step.label}</div>
                      <div className="text-gray-500 text-xs">{step.description}</div>
                    </div>
                    {index < encryptionSteps.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute right-0 top-1/4 transform translate-x-1/2 w-4 h-4 text-gray-600" />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Security Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {securityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-2xl bg-dark-card/50 border border-white/5 text-center group hover:border-primary/30 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-dark-card/50 rounded-2xl border border-white/5 overflow-hidden"
        >
          <div className="p-6 border-b border-white/5">
            <h3 className="text-xl font-semibold text-white">VaultLock vs Cloud-Based Managers</h3>
            <p className="text-gray-400 text-sm mt-1">See why offline-first is the future of password security</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                  <th className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold">VaultLock</span>
                    </div>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-gray-400 font-medium">Cloud Managers</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/2"
                  >
                    <td className="p-4 text-gray-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.vaultlock ? (
                        <CheckCircle className="w-5 h-5 text-success mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-danger mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.cloud === true ? (
                        <CheckCircle className="w-5 h-5 text-success mx-auto" />
                      ) : row.cloud === 'partial' ? (
                        <span className="text-warning text-sm">Partial</span>
                      ) : (
                        <XCircle className="w-5 h-5 text-danger mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
