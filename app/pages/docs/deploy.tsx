import { useHtml } from 'nukejs'

export default function Deploy() {
  useHtml({ title: 'Deployment' })
  return (
    <article className="doc-article">
      <p className="doc-eyebrow">Getting Started</p>
      <h1>Deployment</h1>
      <p className="lead">
        Deploy your Next.js app to the world’s fastest edge network with a single command.
      </p>
      <p>
        NukeJS builds to a portable Node.js server or static output, so you can host it anywhere
        — Vercel, Cloudflare Workers, or your own infrastructure.
      </p>
    </article>
  )
}
