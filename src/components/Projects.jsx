import { useInView } from '../hooks/useInView'
import './Projects.css'

// ─── Add your projects here when ready ───────────────────────────────────────
// To add a project, add an object to this array and the placeholder will disappear.
// Each project needs: id, title, description, tags (array), link (optional), github (optional)
//
// Example:
// {
//   id: 1,
//   title: 'FocusForge',
//   description: 'An AI-powered daily planner and habit tracker. Built with React, Node.js, and OpenAI.',
//   tags: ['React', 'Node.js', 'AI', 'TypeScript'],
//   link: 'https://focusforge.vercel.app',
//   github: 'https://github.com/yourhandle/focusforge',
// },
const projects = [
  {
    id: 1,
    title: 'Cadence — Habit & Goal Tracker',
    description: 'Full-stack MERN app for tracking habits, goals, daily check-ins, and focus metrics. Built to solve a personal problem — designed to scale into a SaaS product. 12 screens designed across Dashboard, Goals, Habits, Check-in, Metrics, and Settings.',
    tags: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Vite'],
    github: 'https://github.com/Saif-Ansari/Cadence',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  return (
    <div className="projects__card">
      <div className="projects__card-header">
        <h3 className="projects__card-title">{project.title}</h3>
        <div className="projects__card-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live site">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <p className="projects__card-desc">{project.description}</p>
      <div className="projects__card-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="projects__tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}

function Placeholder() {
  return (
    <div className="projects__placeholder fade-up" style={{ '--delay': '200ms' }}>
      <div className="projects__placeholder-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>
      <p className="projects__placeholder-title">Projects coming soon</p>
      <p className="projects__placeholder-desc">
        Projects coming soon. Check back shortly.
      </p>
      <span className="projects__coming-badge">In progress</span>
    </div>
  )
}

export default function Projects() {
  const ref = useInView()
  return (
    <section id="projects" className="projects">
      <div className="container" ref={ref}>
        <p className="section-eyebrow fade-up">Projects</p>
        <h2 className="section-title fade-up" style={{ '--delay': '80ms' }}>
          Things I&apos;ve <em>built</em>
        </h2>
        <div className="section-divider fade-up" style={{ '--delay': '140ms' }} />

        {projects.length === 0 ? (
          <Placeholder />
        ) : (
          <div className="projects__grid fade-up" style={{ '--delay': '200ms' }}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
