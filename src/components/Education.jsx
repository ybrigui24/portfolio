import { motion } from 'framer-motion'
import Section from './Section'
import { education } from '../data'
import { fadeUp } from '../motion'

export default function Education() {
  return (
    <Section id="education" label="05 — Education" title="Where I've studied">
      <div className="space-y-6">
        {education.map((entry) => (
          <motion.article
            key={entry.school}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="panel p-7 transition-colors hover:border-white/25 sm:p-9"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <div>
                <h3 className="text-xl font-bold sm:text-2xl">{entry.school}</h3>
                <p className="mt-1 font-medium text-lilac">{entry.degree}</p>
              </div>
              <p className="font-mono text-xs text-white/60">{entry.period}</p>
            </div>
            <p className="mt-4 leading-relaxed text-white/75">{entry.detail}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
