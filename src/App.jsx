import { lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

// The shader background pulls in three.js — keep it out of the main bundle
// so the page renders and becomes interactive before it loads.
const Background = lazy(() => import('./components/Background'))

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <div className="relative z-10">
        <Nav />
        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  )
}
