'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is VaultLock really free?',
    answer: 'Yes, 100% free and open source. No subscriptions, no premium tiers, no hidden costs. VaultLock is built by the community, for the community.',
  },
  {
    question: 'Where is my data stored?',
    answer: 'Only on your device. We have no servers, no cloud sync. Your data never leaves your phone. Everything is stored locally in an encrypted SQLite database.',
  },
  {
    question: 'What if I forget my master password?',
    answer: 'Unfortunately, there\'s no recovery option. This is by design - even we can\'t access your data. We recommend writing down your master password and storing it in a secure physical location.',
  },
  {
    question: 'Can I sync across devices?',
    answer: 'Currently, VaultLock is device-only for maximum security. You can export encrypted backups and import them on another device. Cloud sync may be added as an optional feature in future updates.',
  },
  {
    question: 'Is the code open source?',
    answer: 'Yes! View the full source code on GitHub. We believe in transparency - you can audit exactly how your data is encrypted and stored.',
  },
  {
    question: 'What encryption does VaultLock use?',
    answer: 'AES-256-GCM with PBKDF2-SHA256 key derivation using 10,000 iterations. This is the same encryption standard used by governments and financial institutions worldwide.',
  },
  {
    question: 'How do I backup my passwords?',
    answer: 'Go to Settings > Export Vault. Your backup will be encrypted with your master password. You can import this backup on any device with VaultLock installed.',
  },
  {
    question: 'Is VaultLock available on iOS?',
    answer: 'iOS support is coming soon! Currently, VaultLock is available for Android. Sign up for our newsletter to be notified when the iOS version launches.',
  },
]

const FAQItem = ({ faq, index, isOpen, onToggle }: { 
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-white/5"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`ml-4 flex-shrink-0 ${isOpen ? 'text-primary' : 'text-gray-500'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute inset-0 mesh-bg opacity-20" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
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
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about VaultLock. Can&apos;t find what you&apos;re looking for? Check our GitHub discussions.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-dark-card/50 rounded-2xl border border-white/5 p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="https://github.com/Bhargavvz/VaultLock/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Ask on GitHub Discussions →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
