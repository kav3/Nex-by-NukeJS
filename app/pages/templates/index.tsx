import { useHtml, Link } from 'nukejs'

export default function Templates() {
  useHtml({ title: 'Templates', meta: [{ name: 'description', content: 'Jump-start your Next.js project with official templates.' }] })
  const cards = ['Admin Dashboard', 'SaaS Starter', 'E-commerce', 'Portfolio', 'Blog', 'AI Chat']
  return (
    <section className="simple-page">
      <h1>Templates</h1>
      <p className="lead">Jump-start your project with free, production-ready templates.</p>
      <div className="card-grid">
        {cards.map((c) => (
          <article key={c} className="mini-card">
            <h3>{c}</h3>
            <p>A ready-to-deploy Next.js template.</p>
            <Link href="/docs" className="link-arrow">
              Use template →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
