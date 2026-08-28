import { Link } from 'nukejs'

const FOOTER_COLS = [
  {
    title: 'Resources',
    links: [
      { href: '/docs', label: 'Docs' },
      { href: '/docs/learn', label: 'Learn' },
      { href: '/templates', label: 'Templates' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'More',
    links: [
      { href: '/showcase', label: 'Showcase' },
      { href: '/docs/deploy', label: 'Deployment' },
      { href: '/docs/upgrade', label: 'Upgrades' },
      { href: '/docs/api', label: 'API Reference' },
    ],
  },
  {
    title: 'Community',
    links: [
      { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
      { href: 'https://discord.com', label: 'Discord' },
      { href: 'https://x.com/nextjs', label: 'X / Twitter' },
      { href: 'https://www.youtube.com', label: 'YouTube' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">▲ Next.js</span>
          <p>Build and deploy on the AI Cloud.</p>
          <p className="footer-copy">© {new Date().getFullYear()} Recreated with NukeJS.</p>
        </div>
        <div className="footer-cols">
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith('http') ? (
                      <a href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
