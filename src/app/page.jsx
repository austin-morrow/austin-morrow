import Image from 'next/image'
import Link from 'next/link'
import MoxieForm from '../components/MoxieForm'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import {
  MagnifyingGlassIcon,
  CodeBracketSquareIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import { loadCaseStudies } from '@/lib/mdx'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

import clsx from 'clsx'

import portraitImage from '@/images/portrait.png'

const services = [
  {
    service: 'Development',
    description:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    icon: CodeBracketSquareIcon,
  },
  {
    service: 'Hosting',
    description:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    icon: CircleStackIcon,
  },
  {
    service: 'SEO',
    description:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    icon: MagnifyingGlassIcon,
  },
]

export function SelectedWork() {
  return (
    <section name="work">
      <div className="mt-64 rounded-4xl bg-[#232323] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mx-auto mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Selected Work
          </p>
          {/* Responsive grid */}
          <div className="mt-8 grid grid-cols-1 gap-10 sm:mt-12 lg:grid-cols-2 lg:grid-rows-3">
            {/* Project 1 */}
            <div className="relative min-h-[16rem] lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:min-h-[17rem]">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg p-6">
                <p className="text-lg font-medium tracking-tight text-gray-950">
                  Project 1
                </p>
              </div>
              <div className="flex justify-between text-sm text-white">
                <span>Kentucky Senior Health</span>
                <span>Landing page</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative min-h-[16rem] lg:col-start-1 lg:row-span-1 lg:row-start-2 lg:min-h-[17rem]">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg p-6">
                <p className="text-lg font-medium tracking-tight text-gray-950">
                  Project 2
                </p>
              </div>
              <div className="flex justify-between text-sm text-white">
                <span>Triple L Transport</span>
                <span>Small business website</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative min-h-[16rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-[27rem]">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg p-6">
                <p className="text-lg font-medium tracking-tight text-gray-950">
                  Project 3
                </p>
              </div>
              <div className="flex justify-between text-sm text-white">
                <span>Marissa Morrow Photography</span>
                <span>Portfolio website</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="relative min-h-[16rem] lg:col-span-2 lg:row-start-3 lg:min-h-[17rem]">
              <div className="absolute inset-0 rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden p-6">
                <p className="text-lg font-medium tracking-tight text-gray-950">
                  Project 4
                </p>
              </div>
              <div className="flex justify-between text-sm text-white">
                <span>Morrow Manor Photagraphy</span>
                <span>Portfolio website</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section name="about">
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-[16rem] px-2.5 text-center lg:max-w-[28rem]">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-[2/3] border-2 border-black bg-zinc-100 object-cover"
              />

              <div className="mt-4 flex justify-between text-sm text-gray-700">
                <div className="flex flex-col items-start">
                  <span>Email</span>
                  <span>hello.littlebrothercreative@gmail.com</span>
                </div>

                <div className="flex flex-col items-end">
                  <span>Phone</span>
                  <span>720.797.5320</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
              I’m Austin Morrow. I live in Denver, CO, where I make cool shit.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600">
              <p>
                I love building and designing web applications. With a
                background in non-profit work, I have always looked for ways to
                empower individuals and share stories. I have found that web
                development is more than just building a website and hosting it
                online.
              </p>
              <p>
                With a background in computer science, I'm a problem solver at
                heart and love taking on complex and challenging projects. I'm
                great at quickly getting up to speed and breaking down tricky
                business requirements for industry-specific systems.
              </p>
              <p>
                As a full-stack developer, I'm a one-stop-shop, able to take
                ideas from conception to completion, handling the entire process
                from start to finish.
              </p>
              <p>
                So whether you're a non-technical founder building your first
                app or an established enterprise with an existing tech team, I'm
                ready to jump in and help you get your next big idea off the
                ground.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Services() {
  return (
    <section name="services">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Services
              </h2>
              <p className="mt-4 text-pretty text-base/7 text-gray-600">
                Lorem ipsum dolor sit amet consect adipisicing elit. Magnam
                voluptatum cupiditate veritatis.{' '}
              </p>
              {/* Change to a Link for changing page */}
              <Link href="/pricing" passHref>
                <button
                  type="button"
                  className="mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Pricing
                </button>
              </Link>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {services.map((services) => (
                  <Disclosure key={services.service} as="div" className="pt-6">
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                        <div className="flex items-center space-x-4">
                          <services.icon
                            aria-hidden="true"
                            className="size-6 text-black"
                          />
                          <span className="text-base/7 font-semibold">
                            {services.service}
                          </span>
                        </div>

                        <span className="ml-6 flex h-7 items-center">
                          <PlusSmallIcon
                            aria-hidden="true"
                            className="size-6 group-data-[open]:hidden"
                          />
                          <MinusSmallIcon
                            aria-hidden="true"
                            className="size-6 group-[&:not([data-open])]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base/7 text-gray-600">
                        {services.description}
                      </p>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export function Contact() {
  return (
    <section name="contact">
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                  <defs>
                    <pattern
                      x="100%"
                      y={-1}
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    fill="white"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-50"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Get in touch
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    545 Mavis Island
                    <br />
                    Chicago, IL 99191
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="tel:+1 (555) 234-5678"
                      className="hover:text-gray-900"
                    >
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:austinmorrowdev@gmail.com"
                      className="hover:text-gray-900"
                    >
                      austinmorrowdev@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <MoxieForm />
        </div>
      </div>
    </section>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Software developer from Denver, CO.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Creating websites for creatives and small businesses.
          </p>
        </FadeIn>
      </Container>

      <SelectedWork />

      <About />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Austin did a fantastic job on our website for Centurion Maintenance Inc.
        The lightning fast time frame and organization was well completed by
        Austin. We at Centurion Maintenance Inc. are very pleased and look
        forward to adding more information and pictures in the near future. We
        appreciate his time and efforts.
      </Testimonial>

      <Services />

      <Contact />
    </>
  )
}
