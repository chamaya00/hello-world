function About() {
  return (
    <main className="container">
      <section>
        <h2>About Me</h2>

        <div className="about-content">
          <p>
            Hi, I'm Charles. I've been working in data science and product analytics roles at tech companies in the San Francisco Bay Area since 2013. My experience has spanned a variety of areas: ecommerce, business messaging, mobile gaming, marketing, ads, developer productivity and AI. I'm currently a data scientist at Meta in the Infra org, working on AI products to improve how developers write and review code.
          </p>

          <p>
            My professional interest is obsessed with AI for coding and for communication. Ever since I experienced SQL autocompletion in my query editor, I've been fascinated and compelled to understand more about LLM fundamentals, to find ways for AI to improve productivity at work.
          </p>

          <p>
            Playing around with Claude Code and being able to publish my first website without even opening an IDE or laptop has been another mind-blowing, perspective altering experience.
          </p>

          <p>
            I've put this site together to share random thoughts and ideas on AI topics mainly. To reach me, send a DM on LinkedIn.
          </p>

          <p>
            Thanks for reading!
          </p>

          <p style={{ marginTop: '24px' }}>
            <a
              href="https://linkedin.com/in/charlesamaya"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#242424',
                textDecoration: 'none',
                borderBottom: '1px solid #242424',
                paddingBottom: '2px'
              }}
            >
              LinkedIn
            </a>
            {' · '}
            <a
              href="https://github.com/chamaya00"
              target="_blank"
              rel="noopener noreferrer"
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
          </p>
        </div>
      </section>
    </main>
  )
}

export default About
