'use client'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { useEffect, useRef } from 'react'

export function ContactSection() {
  const iframeRef = useRef(null)

  useEffect(() => {
    const moxieFrame = iframeRef.current
    if (moxieFrame) {
      moxieFrame.src =
        'https://hello.withmoxie.com/01/austin-morrow1/discovery-form---new-website?inFrame=true&sourceUrl=' +
        encodeURIComponent(window.location.href)
    }

    const handleResize = (event) => {
      if (
        event.origin === 'https://hello.withmoxie.com' &&
        event.data &&
        event.data.startsWith('height:')
      ) {
        const height = event.data.split(':')[1]
        if (moxieFrame) {
          moxieFrame.style.height = `${height}px`
        }
      }

      if (
        event.origin === 'https://hello.withmoxie.com' &&
        event.data &&
        event.data.startsWith('[Redirect]')
      ) {
        const url = event.data.slice(10)
        window.location = url
      }
    }

    window.addEventListener('message', handleResize, false)

    return () => {
      window.removeEventListener('message', handleResize)
    }
  }, [])

  return (
    <section name="contact">
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="min-h-[500px] w-full">
              <iframe
                ref={iframeRef}
                id="moxie-discovery-form---new-website"
                allowTransparency="true"
                className="m-0 w-full border-0 p-0"
                style={{ height: '500px' }} // Initial height
              ></iframe>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
