import { useInView } from '../hooks/useInView'
import './Skills.css'

// ─── Edit your skills here ────────────────────────────────────────────────────
// Each skill has a name and a level (0–100) shown as an animated progress bar.
const skillGroups = [
  {
    id: 1,
    title: 'Core',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript (ES2022+)', level: 95 },
      { name: 'HTML5 / CSS3', level: 90 },
    ],
  },
  {
    id: 2,
    title: 'Architecture',
    skills: [
      { name: 'Webpack Module Federation', level: 88 },
      { name: 'Micro-frontends', level: 88 },
      { name: 'Redux', level: 90 },
      { name: 'Component systems', level: 85 },
    ],
  },
  {
    id: 3,
    title: 'Visualization & Real-time',
    skills: [
      { name: 'Konva.js', level: 90 },
      { name: 'Canvas APIs', level: 85 },
      { name: 'ROS topics', level: 80 },
      { name: 'WebSockets', level: 88 },
    ],
  },
  {
    id: 4,
    title: 'Quality & Tooling',
    skills: [
      { name: 'Jest', level: 88 },
      { name: 'React Testing Library', level: 88 },
      { name: 'Webpack', level: 85 },
      { name: 'Git', level: 92 },
    ],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function Skills() {
  const ref = useInView()
  return (
    <section id="skills">
      <div className="container" ref={ref}>
        <p className="section-eyebrow fade-up">Skills</p>
        <h2 className="section-title fade-up" style={{ '--delay': '80ms' }}>
          My <em>technical toolkit</em>
        </h2>
        <div className="section-divider fade-up" style={{ '--delay': '140ms' }} />

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <div key={group.id} className="skills__group fade-up" style={{ '--delay': `${200 + i * 80}ms` }}>
              <div className="skills__group-title">{group.title}</div>
              <div className="skills__bars">
                {group.skills.map((skill, j) => (
                  <div key={skill.name} className="skills__bar-row">
                    <div className="skills__bar-label">
                      <span className="skills__bar-name">{skill.name}</span>
                      <span className="skills__bar-pct">{skill.level}%</span>
                    </div>
                    <div className="skills__bar-track">
                      <div
                        className="skills__bar-fill"
                        style={{
                          '--bar-width': `${skill.level}%`,
                          '--bar-delay': `${300 + i * 80 + j * 55}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
