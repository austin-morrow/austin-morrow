import React from 'react';
import Design from '../assets/images/design.png';

const stats = [
  {
    id: 1,
    name: 'Something about design',
    value: 'Design',
    image: Design
  },
  {
    id: 2,
    name: 'Something about development',
    value: 'Development',
    image: Design
  },
  {
    id: 3,
    name: 'Something about hosting',
    value: 'Hosting',
    image: Design
  },
];

export default function Services() {
  return (
    <div name="services" className="bg-primary-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
            <img src={stat.image} alt={stat.name} className="mx-auto h-16 w-24" /> {/* Add the image */}
            <dd className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
