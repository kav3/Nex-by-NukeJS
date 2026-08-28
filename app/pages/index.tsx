import { Link, useHtml } from 'nukejs'
import CopyButton from '../components/CopyButton'

const FEATURES = [
  {
    icon: '⚡',
    title: 'Fast by Default',
    body: 'Automatic routing, code splitting, and prefetching. No configuration required to ship a fast site.',
  },
  {
    icon: '📈',
    title: 'Scalable',
    body: 'From a single page to thousands, Next.js scales with your team and your traffic without rewrites.',
  },
  {
    icon: '🔌',
    title: 'Extensible',
    body: 'A rich plugin ecosystem and first-class support for the tools you already love.',
  },
  {
    icon: '🚀',
    title: 'Production Ready',
    body: 'Used by the world’s largest companies to build reliable, high-performance web applications.',
  },
  {
    icon: '🧩',
    title: 'Composable',
    body: 'Mix server and client components freely. Ship JavaScript only where it is actually needed.',
  },
  {
    icon: '🌍',
    title: 'Community Driven',
    body: 'Backed by a massive open-source community and world-class documentation.',
  },
]

const LOGOS = ['Vercel', 'GitHub', 'Netflix', 'Stripe', 'Spotify', 'Twitch', 'Nike', 'Hulu']

export default function Home() {
  useHtml({
    title: 'The React Framework for the Web',
    meta: [
      { name: 'description', content: 'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, smart bundling, route pre-fetching, and more.' },
      { property: 'og:title', content: 'Next.js – The React Framework for the Web' },
    ],
  })

  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <Link href="/docs" className="hero-badge">
            <span key="dot" className="hero-badge-dot" /> Introducing App Router →
          </Link>

          <h1 className="hero-title">
            The React Framework
            <br />
            for the Web
          </h1>

          <p className="hero-sub">
            Used by some of the world’s largest companies, Next.js enables you to create
            high-quality web applications with the power of React Components — recreated here
            with NukeJS.
          </p>

          <div className="hero-actions">
            <Link href="/docs" className="btn btn-primary btn-lg">
              Get Started
            </Link>
            <Link href="/docs/learn" className="btn btn-ghost btn-lg">
              Documentation
            </Link>
          </div>

          <div className="hero-terminal">
            <div className="hero-terminal-bar">
              <span className="dot dot-r" />
              <span className="dot dot-y" />
              <span className="dot dot-g" />
              <span className="hero-terminal-title">bash</span>
              <CopyButton text="npx create-next-app@latest" className="copy-btn copy-btn-inline" />
            </div>
            <pre className="hero-terminal-body">
              <code>
                <span className="prompt">$ </span>npx create-next-app@latest
                <span className="caret">▋</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="logos">
        <p className="logos-label">Trusted by the world’s most innovative teams</p>
        <div className="logos-row">
          {LOGOS.map((name) => (
            <span key={name} className="logo-item">
              {name}
            </span>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="section-head">
          <h2>Everything you need to ship</h2>
          <p>Next.js comes with the building blocks you need to create fast, scalable apps.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <article key={f.title} className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-card">
          <h2>Ready to build with Next.js?</h2>
          <p>Start your first project in minutes and deploy to the world’s fastest edge network.</p>
          <div className="hero-actions">
            <Link href="/docs" className="btn btn-primary btn-lg">
              Start Deploying
            </Link>
            <Link href="/showcase" className="btn btn-ghost btn-lg">
              View Showcase
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
