import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import Logo from '@/images/clients/centurion-maintenance/logo.png'

// export function Testimonial({ children, client, className }) {
//   return (
//     <div
//       className={clsx(
//         'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
//         className,
//       )}
//     >
//       <GridPattern
//         className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
//         yOffset={-256}
//       />
//       <Container>
//         <FadeIn>
//           <figure className="mx-auto max-w-4xl">
//             <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
//               <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
//                 {children}
//               </p>
//             </blockquote>
//             <figcaption className="mt-10 flex items-center gap-x-6">
//             <Image
//             alt=""
//             src={Logo}
//             className="size-12 rounded-full bg-gray-50"
//           />
//           <div className="text-sm/6">
//             <div className="font-semibold text-gray-900">Dennis White</div>
//             <div className="mt-0.5 text-gray-600">Centurion Maintenance Inc.</div>
//           </div>
//             </figcaption>
//           </figure>
//         </FadeIn>
//       </Container>
//     </div>
//   )
// }



export function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
                "Austin did a fantastic job on our website for Centurion Maintenance Inc.
        The lightning fast time frame and organization was well completed by
        Austin. We at Centurion Maintenance Inc. are very pleased and look
        forward to adding more information and pictures in the near future. We
        appreciate his time and efforts."
            </p>
          </blockquote>
          <figcaption className="mt-10">
                       <Image
            alt=""
            src={Logo}
            className="mx-auto size-10 rounded-full bg-gray-50"
          />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Dennis</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of Centurion Maintenance Inc.</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

