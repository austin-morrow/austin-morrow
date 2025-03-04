'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
  ],
  tiers: [
    {
      name: 'Hosting',
      id: 'tier-enterprise',
      href: '#',
      price: { monthly: '$25', annually: '$240' },
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom reporting tools',
      ],
      mostPopular: false,
    },
  ],
}

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Pricing() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0])

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Pricing{' '}
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Simple no-tricks pricing
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {/* Replace image with a rectangle */}
          <div className="flex items-center justify-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex justify-center">
                <fieldset aria-label="Payment frequency">
                  <RadioGroup
                    value={frequency}
                    onChange={setFrequency}
                    className="grid grid-cols-2 gap-x-1 rounded-full bg-black p-1 text-center text-xs/5 font-semibold text-white"
                  >
                    {pricing.frequencies.map((option) => (
                      <Radio
                        key={option.value}
                        value={option}
                        className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors ${
                          frequency.value === option.value
                            ? 'bg-white text-black'
                            : 'text-white'
                        }`}
                      >
                        {option.label}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>
              <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none">
                {pricing.tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`${
                      tier.mostPopular
                        ? 'bg-white/5 ring-2 ring-indigo-500'
                        : 'ring-1 ring-black'
                    } rounded-3xl p-8 xl:p-10`}
                  >
                    <div className="flex items-center justify-between gap-x-4">
                      <h2
                        id={tier.id}
                        className="text-lg/8 font-semibold text-black"
                      >
                        {tier.name}
                      </h2>
                    </div>
                    <p className="mt-4 text-sm/6 text-black">
                      {tier.description}
                    </p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-semibold tracking-tight text-black">
                        {tier.price[frequency.value]}
                      </span>
                      <span className="text-sm/6 font-semibold text-black">
                        {frequency.priceSuffix}
                      </span>
                    </p>
                    <ul
                      role="list"
                      className="mt-8 space-y-3 text-sm/6 text-black xl:mt-10"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            aria-hidden="true"
                            className="h-6 w-5 flex-none text-black"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
