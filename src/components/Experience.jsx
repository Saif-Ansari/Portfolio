import { useInView } from '../hooks/useInView'
import './Experience.css'

// ─── Edit your experience here ───────────────────────────────────────────────
const experiences = [
  {
    id: 1,
    date: '2022 – Present',
    company: 'Rapyuta Robotics · Nagpur, India · Remote',
    role: 'Senior Frontend Engineer',
    description:
      'Sole frontend engineer responsible for the complete frontend architecture of a warehouse robotics platform. Built real-time robot state visualization using ROS topics, designed micro-frontend systems with Webpack Module Federation, and collaborated on-site in Tokyo with hardware teams to bridge the gap between robot behavior and operator UX.',
    tags: ['React', 'TypeScript', 'Webpack Module Federation', 'Konva.js', 'Redux', 'ROS topics', 'Jest'],
  },
  {
    id: 2,
    date: 'Prior',
    company: 'Kuliza Technologies',
    role: 'Frontend Engineer',
    description:
      'Worked across client projects delivering scalable frontend solutions. Developed strong foundations in React ecosystem, component architecture, and building for production.',
    tags: ['React', 'JavaScript', 'CSS'],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function Experience() {
  const ref = useInView()
  return (
    <section id="experience" className="experience">
      <div className="container" ref={ref}>
        <p className="section-eyebrow fade-up">Experience</p>
        <h2 className="section-title fade-up" style={{ '--delay': '80ms' }}>
          Where I&apos;ve <em>shipped</em>
        </h2>
        <div className="section-divider fade-up" style={{ '--delay': '140ms' }} />

        <div className="exp__grid">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="exp__card fade-up" style={{ '--delay': `${200 + i * 130}ms` }}>
              <div className="exp__card-header">
                <div className="exp__date">{exp.date}</div>
                {i === 0 && <span className="exp__badge">Current</span>}
              </div>
              <div className="exp__company">{exp.company}</div>
              <h3 className="exp__role">{exp.role}</h3>
              <p className="exp__desc">{exp.description}</p>
              <div className="exp__tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exp__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
