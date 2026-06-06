import { useInView } from '../hooks/useInView'
import './About.css'

const highlights = [
  { label: 'Current role', value: 'Senior Frontend Engineer — Rapyuta Robotics' },
  { label: 'Experience', value: '7 years in frontend engineering' },
  { label: 'Location', value: 'Nagpur, India · Open to remote globally' },
  { label: 'Specialty', value: 'Real-time UIs · Micro-frontends · Robotics' },
  { label: 'Previously', value: 'Kuliza Technologies' },
]

const stats = [
  { num: '7+', label: 'Years experience' },
  { num: '2',  label: 'Companies' },
  { num: '1',  label: 'Platform owned' },
  { num: '∞',  label: 'Problems solved' },
]

export default function About() {
  const ref = useInView()
  return (
    <section id="about">
      <div className="container" ref={ref}>
        <p className="section-eyebrow fade-up">About me</p>
        <h2 className="section-title fade-up" style={{ '--delay': '80ms' }}>
          Building interfaces that<br />
          <em>think at machine speed</em>
        </h2>
        <div className="section-divider fade-up" style={{ '--delay': '140ms' }} />

        <div className="about__stats fade-up" style={{ '--delay': '200ms' }}>
          {stats.map((s) => (
            <div key={s.label} className="about__stat">
              <div className="about__stat-num">{s.num}</div>
              <div className="about__stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="about__grid">
          <div className="about__text fade-up" style={{ '--delay': '340ms' }}>
            <p>
              I&apos;m a Senior Frontend Engineer with 7 years of experience building
              production-grade web applications. Currently the sole frontend engineer
              at Rapyuta Robotics, a Japanese robotics company, where I own the entire
              frontend from architecture to deployment.
            </p>
            <p>
              My work sits at the intersection of real-time data, complex UI, and
              performance — things like live robot state visualization, micro-frontend
              federation, and warehouse management interfaces used by operators on the floor.
            </p>
            <p>
              I&apos;ve worked onsite in Tokyo collaborating directly with hardware and
              robotics teams, giving me a rare perspective on the full loop from robot to screen.
            </p>
          </div>

          <div className="about__highlights fade-up" style={{ '--delay': '460ms' }}>
            {highlights.map((h) => (
              <div key={h.label} className="about__highlight-item">
                <div className="about__hi-label">{h.label}</div>
                <div className="about__hi-value">{h.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
