import { Link } from 'nukejs'

export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <Link href="/" className="logo" aria-label="Next.js home">
      <svg
        key="svg"
        width={size}
        height={size}
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle key="c" cx="90" cy="90" r="90" fill="currentColor" />
        <path
          key="p1"
          d="M149.508 157.52L69.142 54H54v72h12.7V69.286l73.977 95.703a90.1 90.1 0 0 0 8.831-7.469Z"
          fill="var(--logo-mark)"
        />
        <rect key="r" x="115" y="54" width="12" height="72" fill="var(--logo-mark)" />
        <path
          key="p2"
          d="M115 54h-8.831l-1.925 3.421L69.286 120v-9.858l46.387-82.434A89.92 89.92 0 0 1 115 54Z"
          fill="var(--logo-mark)"
        />
      </svg>
      <span className="logo-word">Next.js</span>
    </Link>
  )
}
