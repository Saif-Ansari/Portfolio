import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <span className="footer__name">Saif · Senior Frontend Engineer</span>
      <span className="footer__right">Pune, India · Open to remote · {year}</span>
    </footer>
  )
}
