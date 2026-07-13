import { motion } from 'framer-motion'
import Section from './Section'
import { projects } from '../data'
import { fadeUp } from '../motion'

export default function Projects() {
  return (
    <Section id="projects" label="04 — Projects" title="Things I've built">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => {
          const Card = project.href ? motion.a : motion.article
          return (
            <Card
              key={project.title}
              {...(project.href
                ? {
                    href: project.href,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : {})}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="panel group block p-7 transition-colors hover:border-white/25 sm:p-8"
            >
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <p className="font-mono text-xs text-lilac/80">{project.tag}</p>
                {project.period && (
                  <p className="font-mono text-xs text-white/50">
                    {project.period}
                  </p>
                )}
              </div>
              <h3 className="text-xl font-bold sm:text-2xl">
                {project.title}
                {project.href && (
                  <span className="ml-2 inline-block text-magenta-glow transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                )}
              </h3>
              <p className="mt-2 text-white/70">{project.description}</p>
              <ul className="mt-5 space-y-2.5">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-white/75"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet-glow" />
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
