import { useHtml } from 'nukejs'

export default function Api() {
  useHtml({ title: 'API Reference' })
  return (
    <article className="doc-article">
      <p className="doc-eyebrow">Reference</p>
      <h1>API Reference</h1>
      <p className="lead">
        A complete reference of the functions and components available in Next.js.
      </p>
      <p>
        Everything from <code>useHtml</code> and <code>Link</code> to routing and request helpers.
      </p>
    </article>
  )
}
