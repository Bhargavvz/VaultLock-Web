'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Box, Database, Shield, Lock, Settings, Paintbrush, Fingerprint } from 'lucide-react'

const techStack = [
  {
    category: 'Framework',
    items: [
      { name: 'Flutter 3.9+', description: 'Cross-platform UI toolkit', icon: Box },
      { name: 'Dart', description: 'Programming language', icon: Code2 },
    ],
  },
  {
    category: 'Storage',
    items: [
      { name: 'SQLite (sqflite)', description: 'Local database', icon: Database },
    ],
  },
  {
    category: 'Security',
    items: [
      { name: 'AES-256-GCM', description: 'encrypt + pointycastle', icon: Shield },
      { name: 'PBKDF2-SHA256', description: 'Key derivation', icon: Lock },
      { name: 'Biometric Auth', description: 'local_auth package', icon: Fingerprint },
    ],
  },
  {
    category: 'Architecture',
    items: [
      { name: 'Provider', description: 'State management', icon: Settings },
      { name: 'Material Design 3', description: 'UI design system', icon: Paintbrush },
    ],
  },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tech-stack" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute inset-0 mesh-bg opacity-20" />
        <div className="absolute inset-0 animated-grid opacity-10" />
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
            <Code2 className="w-4 h-4" />
            For Developers
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Built with{' '}
            <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            VaultLock is built on a solid foundation of proven technologies, ensuring reliability, security, and performance.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white px-1">{category.category}</h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="p-4 rounded-xl bg-dark-card/50 border border-white/5 hover:border-primary/20 transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{item.name}</div>
                          <div className="text-gray-500 text-sm">{item.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="rounded-2xl bg-dark-card border border-white/5 overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-surface border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-danger" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="ml-4 text-gray-500 text-sm">encryption_service.dart</span>
            </div>
            {/* Code Content */}
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">
                <code>{`// VaultLock Encryption Service
class EncryptionService {
  static const int keyIterations = 10000;
  static const int keyLength = 32; // 256 bits

  // Derive encryption key using PBKDF2-SHA256
  Future<Uint8List> deriveKey(String password, Uint8List salt) async {
    final pbkdf2 = PBKDF2KeyDerivator(HMac(SHA256Digest(), 64));
    pbkdf2.init(Pbkdf2Parameters(salt, keyIterations, keyLength));
    return pbkdf2.process(utf8.encode(password));
  }

  // Encrypt data using AES-256-GCM
  Future<EncryptedData> encrypt(String plaintext, Uint8List key) async {
    final iv = generateSecureRandom(12);
    final cipher = GCMBlockCipher(AESEngine())
      ..init(true, AEADParameters(KeyParameter(key), 128, iv, Uint8List(0)));
    
    final encrypted = cipher.process(utf8.encode(plaintext));
    return EncryptedData(iv: iv, ciphertext: encrypted);
  }
}`}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
