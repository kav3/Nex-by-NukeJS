import { useHtml, Link } from 'nukejs'

export default function Showcase() {
  useHtml({ title: 'Showcase', meta: [{ name: 'description', content: 'Sites built with Next.js.' }] })
  const sites = ['Acme Inc.', 'Globex', 'Initech', 'Umbrella', 'Hooli', 'Stark Industries']
  return (
    <section className="simple-page">
      <h1>Showcase</h1>
      <p className="lead">Thousands of companies use Next.js in production every day.</p>
      <div className="card-grid">
        {sites.map((s) => (
          <article key={s} className="mini-card">
            <h3>{s}</h3>
            <p>Built with Next.js &amp; NukeJS.</p>
            <Link href="/docs" className="link-arrow">
              View case study →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
