import { motion } from 'framer-motion'

const items = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-bold tracking-tight text-white transition-colors hover:text-lilac"
        >
          yb<span className="text-magenta-glow">.</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {items.map(([label, href]) => (
            <li key={href}>
              <motion.a
                href={href}
                whileHover={{ y: -2 }}
                className="font-mono text-xs uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              >
                {label}
              </motion.a>
            </li>
          ))}
        </ul>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/10 md:hidden"
        >
          Contact
        </motion.a>
      </nav>
    </motion.header>
  )
}
