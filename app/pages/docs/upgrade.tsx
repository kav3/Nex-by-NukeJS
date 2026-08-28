import { useHtml } from 'nukejs'

export default function Upgrade() {
  useHtml({ title: 'Upgrades' })
  return (
    <article className="doc-article">
      <p className="doc-eyebrow">Reference</p>
      <h1>Upgrades</h1>
      <p className="lead">Keep your Next.js app up to date with the latest features and fixes.</p>
      <p>
        Codemods and guided upgrade guides make moving between major versions straightforward and
        low-risk.
      </p>
    </article>
  )
}
