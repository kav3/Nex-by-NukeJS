import { useHtml, Link } from 'nukejs'

export default function NotFound() {
  useHtml({ title: 'Page Not Found' })
  return (
    <section className="simple-page notfound">
      <p className="notfound-code">404</p>
      <h1>This page could not be found.</h1>
      <p className="lead">The page you’re looking for doesn’t exist or has moved.</p>
      <Link href="/" className="btn btn-primary btn-lg">
        Back home
      </Link>
    </section>
  )
}
