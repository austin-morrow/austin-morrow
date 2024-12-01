import Image from 'next/image'

import primaryLogo from '@/images/logo/logo.png'
import primaryLogoBW from '@/images/logo/logob_w.png';

import secondaryLogo from '@/images/logo/secondary.png'
import secondaryLogoBW from '@/images/logo/secondaryb_w.png';



export function Logomark({ className, invert = false, ...props }) {
  return (
    <div className={`relative ${className}`} {...props}>
      <Image
        src={invert ? secondaryLogoBW : secondaryLogo}
        alt="Logo"
        width={130}
        height={32}
        priority
        className="w-auto h-14"
      />
    </div>
  );
}

export function Logo({ className, invert = false, ...props }) {
  return (
    <div className={`relative ${className}`} {...props}>
      <Image
        src={invert ? primaryLogoBW : primaryLogo}
        alt="Logo"
        width={130}
        height={32}
        priority
        className="w-auto h-auto"
      />
    </div>
  );
}
