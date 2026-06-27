import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import './Contact.css'

// ─── Update your contact links here ──────────────────────────────────────────
const CONTACT_EMAIL = 'sfansari007@gmail.com'
const CONTACT_LINKEDIN = 'https://linkedin.com/in/saif-ansari-32b487137'
const CONTACT_GITHUB = 'https://github.com/saif-ansari'
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const ref = useInView()

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container" ref={ref}>
        <p className="section-eyebrow fade-up">Contact</p>
        <h2 className="section-title fade-up" style={{ '--delay': '80ms' }}>
          Let&apos;s <em>work together</em>
        </h2>
        <div className="section-divider fade-up" style={{ '--delay': '140ms' }} />

        <div className="contact__inner">
          <div className="contact__left fade-up" style={{ '--delay': '200ms' }}>
            <p className="contact__desc">
              I&apos;m open to senior remote frontend roles globally. If you&apos;re building
              something ambitious — especially in robotics, real-time systems, or
              complex web applications — I&apos;d love to hear from you.
            </p>

            <div className="contact__links">
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact__link">
                <span className="contact__link-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                </span>
                {CONTACT_EMAIL}
              </a>

              <a href={CONTACT_LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact__link">
                <span className="contact__link-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                LinkedIn
              </a>

              <a href={CONTACT_GITHUB} target="_blank" rel="noopener noreferrer" className="contact__link">
                <span className="contact__link-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </span>
                GitHub
              </a>
            </div>
          </div>

          <form className="contact__form fade-up" style={{ '--delay': '320ms' }} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="What are you working on?"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="contact__send-btn" disabled={status === 'sending' || status === 'sent'}>
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent ✓' : status === 'error' ? 'Failed, try again →' : 'Send message →'}
            </button>
            {status === 'error' && (
              <p style={{ color: 'var(--color-accent, #e05)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                Something went wrong. You can also email me directly at {CONTACT_EMAIL}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
