'use client'

import Image from 'next/image'
import { useState } from 'react'
import Logo from '@/images/clients/centurion-maintenance/logo.png'

export function Testimonial() {
  const [isOpen, setIsOpen] = useState(false)

  const fullQuote = `Austin did a fantastic job on our website for Centurion Maintenance Inc. 
  The lightning fast time frame and organization was well completed by Austin. 
  We at Centurion Maintenance Inc. are very pleased and look forward to adding 
  more information and pictures in the near future. We appreciate his time and efforts.`

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          What are people saying?
        </div>
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-lg font-semibold text-gray-900 sm:text-xl">
              <p
                className="inline-block cursor-pointer leading-snug transition"
                onClick={() => setIsOpen(true)}
              >
                {/* Line 1 */}
                <span className="mx-auto block w-fit bg-black px-3 py-1 pt-2 text-white">
                  “Lightning fast time frame
                </span>
                {/* Line 2 */}
                <span className="ml-10 block w-fit bg-black px-4 pb-2 text-yellow-400">
                  and organization..."
                </span>
              </p>
            </blockquote>
          </figure>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="relative mx-4 max-w-lg bg-black p-8 shadow-xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 text-gray-200 hover:text-gray-400"
              >
                ✕
              </button>
              <blockquote className="text-lg font-medium leading-relaxed text-white sm:text-xl">
                “{fullQuote}”
              </blockquote>

              <figcaption className="mt-10">
                <Image
                  alt=""
                  src={Logo}
                  className="mx-auto size-10 rounded-full"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-yellow-500">
                    Dennis White
                  </div>
                  <svg
                    width={3}
                    height={3}
                    viewBox="0 0 2 2"
                    aria-hidden="true"
                    className="fill-white"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="text-white">
                    CEO of Centurion Maintenance Inc.
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
