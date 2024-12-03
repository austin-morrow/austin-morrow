import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'


export function Footer() {
  return (
    <Container as="footer" className="mt-4 w-full sm:mt-6 lg:mt-8">
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" />
          </Link>
          <p className="text-sm text-neutral-700">
            © Austin Morrow {new Date().getFullYear()}
          </p>
        </div>
    </Container>
  )
}
