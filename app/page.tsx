import Image from 'next/image';

import Button from '@/components/Button';
import manMobileImg from '@/public/images/hero/man-mobile.png';
import manDesktopImg from '@/public/images/hero/man-desktop.png';
import globeMobileImg from '@/public/images/hero/globe-mobile.png';
import globeDesktopImg from '@/public/images/hero/globe-desktop.png';

export default function Home() {
  return (
    <main className='max-w-screen-2xl px-12 lg:px-32'>
      {/* HERO SECTION */}
      <section className='lg:flex items-end'>
        <div className='text-white font-montserrat text-center lg:text-left'>
          <h3 className='font-bold italic text-base mt-8 lg:text-4xl whitespace-nowrap'>
            Igniting a Revolution in{' '}
            <span className='relative hero_dec'>HR Innovation</span>
          </h3>

          <h1 className='font-clash text-[32px] mt-14 lg:text-[80px] leading-[1.15] lg:mt-32'>
            getlinked <span className='relative hero_bulb_dec'>Tech</span>{' '}
            Hackathon <span className='text-pink'>1.0</span>
            🔗💥
          </h1>

          <p className='text-[13px] leading-[166%] mt-2 mb-6 lg:text-xl lg:max-w-[32.625rem] lg:mb-10'>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <Button url='/register'>Register</Button>

          <div className='flex items-center justify-center space-x-4 text-sm mt-8 mb-5 font-unica lg:justify-normal lg:space-x-8 lg:mt-20 lg:mb-24'>
            <p className='text-5xl lg:text-[4rem] lg:leading-[133%]'>
              00<span className='text-sm font-montserrat'>H</span>
            </p>

            <p className='text-5xl lg:text-[4rem] lg:leading-[133%]'>
              00<span className='text-sm font-montserrat'>M</span>
            </p>

            <p className='text-5xl lg:text-[4rem] lg:leading-[133%]'>
              00<span className='text-sm font-montserrat'>S</span>
            </p>
          </div>
        </div>

        <div>
          <div className='relative lg:hidden -mx-12 w-screen'>
            <Image
              alt='Picture of a man holding a globe'
              src={manMobileImg}
              placeholder='blur'
              quality={100}
              className='grayscale'
            />

            <Image
              alt=''
              src={globeMobileImg}
              placeholder='blur'
              quality={100}
              className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
            />
          </div>

          <div className='relative hidden lg:block'>
            <Image
              alt='Picture of a man holding a globe'
              src={manDesktopImg}
              placeholder='blur'
              quality={100}
              className='grayscale'
            />

            <Image
              alt=''
              src={globeDesktopImg}
              placeholder='blur'
              quality={100}
              className='absolute top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
