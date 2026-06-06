import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__noise" aria-hidden="true" />
      <div className="container">
        <div className="hero__two-col">
          <div className="hero__text">
            <div className="hero__label">
              <span className="hero__dot" aria-hidden="true" />
              Available for new opportunities
            </div>

            <h1 className="hero__name">
              Saif Ansari<br />
              <em>Frontend Engineer</em>
            </h1>

            <p className="hero__title">Turning complex systems into <em>intuitive experiences</em></p>

            <p className="hero__desc">
              I craft high-performance frontend systems for complex, real-time
              applications — from warehouse robotics dashboards to scalable
              micro-frontend architectures.
            </p>

            <div className="hero__cta">
              <a href="#contact" className="btn-primary">Get in touch</a>
              <a href="#experience" className="btn-ghost">View my work</a>
            </div>
          </div>

          <div className="hero__terminal" aria-hidden="true">
            <div className="hero__terminal-bar">
              <span className="hero__tbar-dot hero__tbar-dot--red" />
              <span className="hero__tbar-dot hero__tbar-dot--yellow" />
              <span className="hero__tbar-dot hero__tbar-dot--green" />
              <span className="hero__tbar-title">~/saif — zsh</span>
            </div>
            <div className="hero__terminal-body">
              <p className="t-cmd">$ whoami</p>
              <p className="t-out">&gt; Saif Ansari · Frontend Engineer</p>
              <div className="t-gap" />
              <p className="t-cmd">$ cat stack.txt</p>
              <p className="t-out">&gt; React  TypeScript  Webpack&nbsp;MF</p>
              <p className="t-out">&gt; Konva.js  Redux  ROS  WebSockets</p>
              <div className="t-gap" />
              <p className="t-cmd">$ echo $STATUS</p>
              <p className="t-out">&gt; open_to_remote: true ✓</p>
              <div className="t-gap" />
              <p className="t-cmd">$ <span className="t-cursor">▌</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
