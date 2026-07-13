import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp } from '../motion'

export default function About() {
  return (
    <Section id="about" label="01 — About" title="Who I am">
      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div variants={fadeUp} className="panel p-7 lg:col-span-2 sm:p-9">
          <p className="text-lg leading-relaxed text-white/85">
            I'm a Computer Engineering student at Koç University (Class of
            2028) who likes understanding software all the way down. I am interested 
            in many areas such as System Design, Software Development, Computer Vision, and more... 
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/85">
            Outside the terminal, I help run the International Student
            Community in Istanbul, tutor English and French at the Office of Teaching and Learning, 
            and travel the world with my bestfriends.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} className="panel p-7 sm:p-9">
          <p className="mono-label mb-5">Spoken languages</p>
          <ul className="space-y-3">
            {[
              ['English', 'Native'],
              ['Arabic', 'Native'],
              ['French', 'C2'],
              ['Spanish', 'B2'],
              ['Turkish', 'B2'],
              ['Chinese', 'HSK2'],
            ].map(([lang, level]) => (
              <li key={lang} className="flex items-baseline justify-between gap-4">
                <span className="font-medium text-white/90">{lang}</span>
                <span className="font-mono text-xs text-lilac/80">{level}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
