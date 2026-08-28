import { useHtml } from 'nukejs'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useHtml({
    title: (prev) => (prev ? `${prev} | Next.js` : 'Next.js – The React Framework for the Web'),
    htmlAttrs: { lang: 'en' },
    meta: [
      { name: 'description', content: 'Next.js gives you the best developer experience with all the features you need for production.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'Next.js – The React Framework for the Web' },
      { property: 'og:description', content: 'The React Framework for the Web.' },
      { property: 'og:type', content: 'website' },
    ],
    link: [{ rel: 'stylesheet', href: '/main.css' }],
  })

  return (
    <>
      <Nav />
      <main className="page">{children}</main>
      <Footer />
    </>
  )
}
