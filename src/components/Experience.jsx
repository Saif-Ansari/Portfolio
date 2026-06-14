import { useInView } from '../hooks/useInView'
import './Experience.css'

// ─── Edit your experience here ───────────────────────────────────────────────
const experiences = [
  {
    id: 1,
    date: '2022 – Present',
    company: 'Rapyuta Robotics · Bangalore',
    role: 'Senior Frontend Engineer',
    highlights: [
      'Took full ownership of a real-time warehouse operations dashboard — wrote the product spec and architecture design, shipped as an Android app and tablet-optimised web app used by operators on-site.',
      'Pioneered Webpack Module Federation micro-frontend architecture in the org — the approach was adopted across all frontend products.',
      'Built real-time robot state visualisation using 2D canvas rendering and live ROS data streams.',
      'Contributed to a fleet management platform with real-time 3D map visualisation (deck.gl / Mapbox), robot fleet monitoring, and WMS integration.',
      'Reduced the frontend bundle from ~18 MB to ~2 MB and resolved memory leaks caused by background workers.',
      'Built and shipped a warehouse workflow Android APK for picking, stowing, replenishment, and auditing tasks.',
      'Worked onsite in Tokyo collaborating directly with hardware and robotics teams.',
    ],
    tags: ['React', 'TypeScript', 'Ionic / Capacitor', 'Webpack Module Federation', 'Redux', 'deck.gl', 'ROS', 'WebSockets', 'Jest'],
  },
  {
    id: 2,
    date: '2019 – 2021',
    company: 'Kuliza Technologies · Bangalore',
    role: 'Frontend Developer',
    highlights: [
      'Built data management dashboards for school IT admins (Managed Methods) — full-text search, filters, sorting, pagination, and security analytics visualised with Recharts.',
      'Delivered production-ready responsive pages and WhatsApp / SMS quote-request flows for Acko Insurance.',
    ],
    tags: ['React', 'JavaScript', 'Recharts', 'Ant Design', 'CSS'],
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
              <ul className="exp__highlights">
                {exp.highlights.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
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
