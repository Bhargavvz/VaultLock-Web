'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react'
import Image from 'next/image'

const screenshots = [
  {
    id: 1,
    title: 'Onboarding',
    description: 'Beautiful 3-page welcome flow',
    gradient: 'from-primary to-accent',
    image: '/images/Onboarding.jpeg',
  },
  {
    id: 2,
    title: 'Main Vault',
    description: 'All your passwords at a glance',
    gradient: 'from-secondary to-primary',
    image: '/images/MainVault.jpeg',
  },
  {
    id: 3,
    title: 'Password Details',
    description: 'View and edit your credentials',
    gradient: 'from-accent to-secondary',
    image: '/images/PasswordDetails.jpeg',
  },
  {
    id: 4,
    title: 'Add Password',
    description: 'Create new entries with generator',
    gradient: 'from-primary to-secondary',
    image: '/images/AddPassword.jpeg',
  },
  {
    id: 5,
    title: 'Security Audit',
    description: 'Find weak and reused passwords',
    gradient: 'from-danger to-warning',
    image: '/images/SecurityAudit.jpeg',
  },
  {
    id: 6,
    title: 'Settings',
    description: 'Customize your experience',
    gradient: 'from-secondary to-accent',
    image: '/images/Settings.jpeg',
  },
]

export default function Screenshots() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="screenshots" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-surface">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Smartphone className="w-4 h-4" />
            App Preview
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            See VaultLock in{' '}
            <span className="gradient-text">Action</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A beautifully crafted Material Design 3 interface that&apos;s both stunning and intuitive.
          </p>
        </motion.div>

        {/* Screenshot Carousel */}
        <div className="relative">
          {/* Main Display */}
          <div className="flex justify-center items-center gap-4 lg:gap-8 mb-8">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white dark:text-white" />
            </motion.button>

            {/* Phone Mockups */}
            <div className="relative flex items-center justify-center" style={{ minHeight: '580px', width: '100%', maxWidth: '700px' }}>
              <AnimatePresence mode="popLayout">
                {[-1, 0, 1].map((offset) => {
                  const index = (activeIndex + offset + screenshots.length) % screenshots.length
                  const screenshot = screenshots[index]
                  const isCenter = offset === 0
                  
                  return (
                    <motion.div
                      key={`${screenshot.id}-${offset}`}
                      initial={{ opacity: 0, scale: 0.8, x: offset * 100 }}
                      animate={{
                        opacity: isCenter ? 1 : 0.5,
                        scale: isCenter ? 1 : 0.75,
                        x: offset * (isCenter ? 0 : 180),
                        zIndex: isCenter ? 10 : 5,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={`absolute ${isCenter ? '' : 'hidden lg:block'}`}
                    >
                      <div className={`phone-mockup ${isCenter ? '' : 'opacity-50 blur-sm'}`}>
                        <div className="screen overflow-hidden">
                          {/* Real Screenshot */}
                          <Image
                            src={screenshot.image}
                            alt={screenshot.title}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 280px, 280px"
                          />
                        </div>
                      </div>
                      
                      {/* Glow Effect */}
                      {isCenter && (
                        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${screenshot.gradient} blur-[80px] opacity-30 scale-150`} />
                      )}
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Screenshot Info */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {screenshots[activeIndex].title}
            </h3>
            <p className="text-gray-400">{screenshots[activeIndex].description}</p>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-gradient-to-r from-primary to-secondary'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
