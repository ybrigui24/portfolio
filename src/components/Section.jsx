import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../motion'

export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.p variants={fadeUp} className="mono-label mb-3">
          {label}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mb-10 text-4xl font-black tracking-tight sm:mb-14 sm:text-5xl"
        >
          {title}
        </motion.h2>
        {children}
      </motion.div>
    </section>
  )
}
