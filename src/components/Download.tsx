'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, Smartphone, Apple, Github, QrCode, HardDrive, Tag } from 'lucide-react'

export default function DownloadSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-6"
            >
              <Download className="w-4 h-4" />
              Available Now
            </motion.span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Download{' '}
              <span className="gradient-text">VaultLock</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Start securing your passwords today. Free, open source, and privacy-focused. No account required, no subscription ever.
            </p>

            {/* App Info */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Tag className="w-4 h-4 text-primary" />
                <span className="text-white text-sm">v2.0.0</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <HardDrive className="w-4 h-4 text-secondary" />
                <span className="text-white text-sm">~52MB</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              {/* APK Download */}
              <motion.a
                href="[APK_DOWNLOAD_LINK]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white shadow-glow hover:shadow-glow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm opacity-90">Direct Download</div>
                  <div className="font-semibold text-lg">Download APK for Android</div>
                </div>
              </motion.a>

              {/* Play Store */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-dark-card border border-white/10 opacity-70 cursor-not-allowed"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500">Coming Soon</div>
                  <div className="font-semibold text-gray-400">Google Play Store</div>
                </div>
              </motion.div>

              {/* App Store */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-dark-card border border-white/10 opacity-70 cursor-not-allowed"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500">Coming Soon</div>
                  <div className="font-semibold text-gray-400">Apple App Store</div>
                </div>
              </motion.div>

              {/* GitHub Release */}
              <motion.a
                href="https://github.com/Bhargavvz/VaultLock/releases"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-dark-card border border-white/10 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">View All Releases</div>
                  <div className="font-semibold text-white">GitHub Releases</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - QR Code & Phone */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* QR Code Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-dark-card border border-white/10 text-center mb-8"
            >
              <div className="w-48 h-48 mx-auto bg-white rounded-2xl p-4 mb-4">
                {/* QR Code Placeholder */}
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <QrCode className="w-24 h-24 text-gray-400" />
                </div>
              </div>
              <p className="text-gray-400 text-sm">Scan to download on your phone</p>
              <p className="text-gray-500 text-xs mt-1">(QR code placeholder - update with actual link)</p>
            </motion.div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                '100% Free',
                'No Account Required',
                'Open Source',
                'Privacy First',
              ].map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
