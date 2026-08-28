import { useHtml } from 'nukejs'

export default function DocsIntro() {
  useHtml({ title: 'Introduction' })
  return (
    <article className="doc-article">
      <p className="doc-eyebrow">Getting Started</p>
      <h1>Introduction</h1>
      <p className="lead">
        Next.js is a React framework that gives you building blocks to create fast, scalable,
        and production-ready web applications. This site is a faithful recreation of the
        Next.js homepage, built entirely with NukeJS.
      </p>
      <h2>Why Next.js</h2>
      <p>
        Next.js provides an opinionated structure for your React app, handling routing,
        rendering, and bundling so you can focus on building features. With NukeJS we get the
        same server-rendered, file-based-routing experience.
      </p>
      <h2>Server and Client Components</h2>
      <p>
        Pages render on the server by default and ship zero JavaScript. Mark a component with
        <code> "use client" </code> only when it needs interactivity — just like the theme
        toggle and copy button on this site.
      </p>
      <div className="doc-callout">
        <strong>Tip:</strong> Open <code>app/pages/index.tsx</code> to see how this homepage is
        built.
      </div>
    </article>
  )
}
