function About() {
  return (
    <main className="container">
      <section>
        <h2>About Me</h2>

        <div className="about-content">
          <p>
            Hi, I'm Charles Amaya, a software developer passionate about building elegant solutions to
            complex problems. I believe in writing clean, maintainable code and creating tools that make
            people's lives easier.
          </p>

          <p>
            I spend my days working with modern web technologies, exploring new programming paradigms,
            and contributing to open-source projects. When I'm not coding, you'll find me reading
            technical blogs, experimenting with new tools, or sharing what I've learned with the
            developer community.
          </p>

          <h3>What I Do</h3>
          <p>
            I specialize in full-stack web development, with a focus on building scalable, user-friendly
            applications. My work spans from crafting intuitive front-end experiences to designing robust
            back-end architectures.
          </p>

          <h3>Technologies I Work With</h3>
          <ul>
            <li><strong>Frontend:</strong> React, Vue.js, TypeScript, CSS/Sass</li>
            <li><strong>Backend:</strong> Node.js, Python, Go, FastAPI</li>
            <li><strong>Databases:</strong> PostgreSQL, MongoDB, Redis</li>
            <li><strong>Tools:</strong> Git, Docker, CI/CD, AWS</li>
          </ul>

          <h3>Get In Touch</h3>
          <p>
            I'm always interested in connecting with fellow developers, potential collaborators, or
            anyone who wants to chat about technology. Feel free to reach out!
          </p>

          <p>
            <a
              href="mailto:your.email@example.com"
              style={{
                color: '#242424',
                textDecoration: 'none',
                borderBottom: '1px solid #242424',
                paddingBottom: '2px'
              }}
            >
              Email me
            </a>
            {' · '}
            <a
              href="#"
              style={{
                color: '#242424',
                textDecoration: 'none',
                borderBottom: '1px solid #242424',
                paddingBottom: '2px',
                marginLeft: '16px'
              }}
            >
              GitHub
            </a>
            {' · '}
            <a
              href="#"
              style={{
                color: '#242424',
                textDecoration: 'none',
                borderBottom: '1px solid #242424',
                paddingBottom: '2px',
                marginLeft: '16px'
              }}
            >
              LinkedIn
            </a>
            {' · '}
            <a
              href="#"
              style={{
                color: '#242424',
                textDecoration: 'none',
                borderBottom: '1px solid #242424',
                paddingBottom: '2px',
                marginLeft: '16px'
              }}
            >
              Twitter
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default About
