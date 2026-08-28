import { useHtml, Link } from 'nukejs'

export default function Learn() {
  useHtml({ title: 'Learn' })
  return (
    <article className="doc-article">
      <p className="doc-eyebrow">Getting Started</p>
      <h1>Learn Next.js</h1>
      <p className="lead">
        The fastest way to learn Next.js is by building a real application. Follow the lessons
        to create a dynamic, full-stack app from scratch.
      </p>
      <h2>What you’ll build</h2>
      <p>
        A dashboard with server-rendered pages, interactive client components, and API routes —
        all powered by NukeJS under the hood.
      </p>
      <p>
        <Link href="/docs">← Back to Introduction</Link>
      </p>
    </article>
  )
}
