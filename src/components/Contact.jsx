import { motion } from 'framer-motion'
import Section from './Section'
import { links } from '../data'
import { fadeUp } from '../motion'

export default function Contact() {
  return (
    <Section id="contact" label="06 — Contact" title="Let's talk">
      <motion.div variants={fadeUp} className="panel p-8 text-center sm:p-14">
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/80">
          I'm open to internships, projects, and interesting conversations in any language.
        </p>
        <motion.a
          href={links.email}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-mono text-sm font-bold text-ink transition-colors hover:bg-lilac"
        >
          Email me
        </motion.a>
        <div className="mt-8 flex justify-center gap-8">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
      <motion.p
        variants={fadeUp}
        className="mt-14 text-center font-mono text-xs text-white/40"
      >
        © {new Date().getFullYear()} Yusuf Brigui · Istanbul, Turkey
      </motion.p>
    </Section>
  )
}
