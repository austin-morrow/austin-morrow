import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import {
  Squares2X2Icon,
  CodeBracketSquareIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import { loadCaseStudies } from '@/lib/mdx'

import clsx from 'clsx'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const features = [
  {
    name: 'Layout',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Development',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Hosting',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    icon: CircleStackIcon,
  },
]

export function SelectedWork() {
  return (
    <section name="work">
   
   <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <p className="mx-auto mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
      Selected Work
    </p>
    {/* Responsive grid */}
    <div className="mt-8 grid gap-6 sm:mt-12 grid-cols-1 lg:grid-cols-2 lg:grid-rows-3">
      {/* Project 1 */}
      <div className="relative lg:col-start-1 lg:row-start-1 lg:row-span-1 min-h-[16rem] lg:min-h-[17rem]">
        <div className="absolute inset-px rounded-lg bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-lg p-6">
          <p className="text-lg font-medium tracking-tight text-gray-950">Project 1</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="relative lg:col-start-1 lg:row-start-2 lg:row-span-1 min-h-[16rem] lg:min-h-[17rem]">
        <div className="absolute inset-px rounded-lg bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-lg p-6">
          <p className="text-lg font-medium tracking-tight text-gray-950">Project 2</p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="relative lg:col-start-2 lg:row-start-1 lg:row-span-2 min-h-[16rem] lg:min-h-[27rem]">
        <div className="absolute inset-px rounded-lg bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-lg p-6">
          <p className="text-lg font-medium tracking-tight text-gray-950">Project 3</p>
        </div>
      </div>

      {/* Project 4 */}
      <div className="relative lg:col-span-2 lg:row-start-3 min-h-[16rem] lg:min-h-[17rem]">
        <div className="absolute inset-0 rounded-lg bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden p-6">
          <p className="text-lg font-medium tracking-tight text-gray-950">Project 4</p>
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
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover"
              />
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
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={XIcon}>
                Follow on X
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8"
              >
                spencer@planetaria.tech
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Services() {
  return (
    <section name="services">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Services
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-gray-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
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

      <ContactSection />
    </>
  )
}
