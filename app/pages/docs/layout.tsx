import { Link, useHtml } from 'nukejs'

const DOC_NAV = [
  {
    group: 'Getting Started',
    items: [
      { href: '/docs', label: 'Introduction' },
      { href: '/docs/learn', label: 'Learn' },
      { href: '/docs/deploy', label: 'Deployment' },
    ],
  },
  {
    group: 'Reference',
    items: [
      { href: '/docs/upgrade', label: 'Upgrades' },
      { href: '/docs/api', label: 'API Reference' },
    ],
  },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  useHtml({ title: (prev) => (prev ? `${prev} | Docs` : 'Docs') })

  return (
    <div className="docs-layout">
      <aside className="docs-sidebar" aria-label="Docs navigation">
        {DOC_NAV.map((section) => (
          <div key={section.group} className="docs-nav-group">
            <h5>{section.group}</h5>
            <ul>
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
      <article className="docs-content">{children}</article>
    </div>
  )
}
