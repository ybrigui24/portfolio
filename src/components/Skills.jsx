import { motion } from 'framer-motion'
import Section from './Section'
import { skills } from '../data'
import { fadeUp, stagger, viewportOnce } from '../motion'

function ChipGroup({ label, items }) {
  return (
    <motion.div variants={fadeUp} className="panel p-7 sm:p-9">
      <p className="mono-label mb-5">{label}</p>
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="flex flex-wrap gap-2.5"
      >
        {items.map((item) => (
          <motion.li key={item} variants={fadeUp}>
            <motion.span
              whileHover={{ scale: 1.06 }}
              className="inline-block cursor-default rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-sm text-white/85 transition-colors hover:border-violet-glow/60 hover:text-white"
            >
              {item}
            </motion.span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <Section id="skills" label="03 — Skills" title="What I work with">
      <div className="grid gap-6 lg:grid-cols-2">
        <ChipGroup label="Programming languages" items={skills.languages} />
        <ChipGroup label="Tools & platforms" items={skills.tools} />
      </div>
    </Section>
  )
}
