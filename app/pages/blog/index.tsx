import { useHtml, Link } from 'nukejs'

export default function Blog() {
  useHtml({ title: 'Blog', meta: [{ name: 'description', content: 'News and announcements from the Next.js team.' }] })
  const posts = [
    { title: 'Announcing Next.js 15', date: 'Aug 2025' },
    { title: 'The App Router, one year on', date: 'Jun 2025' },
    { title: 'Faster builds with Turbopack', date: 'Apr 2025' },
  ]
  return (
    <section className="simple-page">
      <h1>Blog</h1>
      <p className="lead">News, announcements, and deep dives from the team.</p>
      <ul className="post-list">
        {posts.map((p) => (
          <li key={p.title}>
            <Link href="/blog">{p.title}</Link>
            <span className="post-date">{p.date}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
