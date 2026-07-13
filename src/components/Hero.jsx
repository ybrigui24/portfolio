import { motion } from 'framer-motion'
import { links } from '../data'
import { fadeUp, stagger } from '../motion'

const socials = [
  { label: 'GitHub', href: links.github, external: true },
  { label: 'LinkedIn', href: links.linkedin, external: true },
  { label: 'Email', href: links.email, external: false },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-content flex-col justify-center px-5 pt-24 sm:px-8"
    >
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.p variants={fadeUp} className="mono-label mb-5">
          Istanbul, Turkey — Computer Engineering
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Yusuf
          <br />
          Brigui<span className="text-magenta-glow">.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl"
        >
          Computer Engineering student at Koç University working close with systems design, software development, and low-level
          performance optimization.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
          {socials.map(({ label, href, external }) => (
            <motion.a
              key={label}
              href={href}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 font-mono text-sm text-white backdrop-blur-md transition-colors hover:border-white/50 hover:bg-white/10"
            >
              {label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="group absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-white"
      >
        scroll
      </motion.a>
    </section>
  )
}
