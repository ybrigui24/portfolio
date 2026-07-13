import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data'
import { fadeUp } from '../motion'

export default function Experience() {
  return (
    <Section id="experience" label="02 — Experience" title="Where I've worked">
      <div className="space-y-6">
        {experience.map((job) => {
          const Card = job.href ? motion.a : motion.article
          return (
            <Card
              key={job.role + job.org}
              {...(job.href
                ? {
                    href: job.href,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : {})}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="panel group block p-7 transition-colors hover:border-white/25 sm:p-9"
            >
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">
                    {job.role}
                    {job.href && (
                      <span className="ml-2 inline-block text-magenta-glow transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 font-medium text-lilac">
                    {job.org} · {job.location}
                  </p>
                </div>
                <p className="font-mono text-xs text-white/60">{job.period}</p>
              </div>
              <ul className="space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-white/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-magenta-glow" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
