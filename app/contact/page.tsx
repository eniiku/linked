import Link from 'next/link';
import Image from 'next/image';

import instagramIcon from '@/public/svg/instagram.svg';
import xIcon from '@/public/svg/x.svg';
import facebookIcon from '@/public/svg/facebook.svg';
import linkedInIcon from '@/public/svg/linkedin.svg';

import starPurpleSm from '@/public/images/shared/star-purple-sm.png';
import starPurpleLg from '@/public/images/shared/star-purple-lg.png';
import starGreySm from '@/public/images/shared/star-grey-sm.png';
import starGreyLg from '@/public/images/shared/star-grey-lg.png';
import starWhiteSm from '@/public/images/shared/star-white-sm.png';
import starWhiteLg from '@/public/images/shared/star-white-lg.png';
import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <main className='relative flare-alt overflow-hidden'>
      <div className='hidden lg:block'>
        <Navbar />
      </div>

      <section className='px-12 lg:px-32 max-w-screen-2xl mx-auto text-white pt-12 pb-9 font-montserrat lg:grid grid-cols-2 lg:items-center lg:py-16 relative'>
        {/* Decorative elements */}
        <span className='absolute bottom-[8.31rem] left-10 blink z-10 lg:left-[12.81rem] lg:top-[3.44rem] lg:bottom-auto'>
          <Image src={starPurpleSm} alt='' aria-hidden className='md:hidden' />
          <Image
            src={starPurpleLg}
            alt=''
            aria-hidden
            className='hidden md:block'
          />
        </span>

        <span className='absolute top-[8.62rem] right-[3.56rem] blink animate-delay-100'>
          <Image src={starGreySm} alt='' aria-hidden className='md:hidden' />
          <Image
            src={starGreyLg}
            alt=''
            aria-hidden
            className='hidden md:block'
          />
        </span>
        <span className='absolute top-16 right-[50%] -translate-x-1/2 blink animate-delay-75 lg:hidden'>
          <Image src={starPurpleSm} alt='' aria-hidden className='md:hidden' />
          <Image
            src={starPurpleLg}
            alt=''
            aria-hidden
            className='hidden md:block'
          />
        </span>
        <span className='absolute bottom-[13.12rem] right-[1.69rem] blink animate-delay-150 lg:right-32 lg:bottom-32'>
          <Image src={starWhiteSm} alt='' aria-hidden className='md:hidden' />
          <Image
            src={starWhiteLg}
            alt=''
            aria-hidden
            className='hidden md:block'
          />
        </span>

        <button className='lg:hidden mb-10'>
          <Link href='/'>
            <svg
              width='23'
              height='23'
              viewBox='0 0 23 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='11.5'
                cy='11.5'
                r='11'
                stroke='url(#paint0_linear_177_298)'
              />
              <path
                d='M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667'
                stroke='white'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_177_298'
                  x1='11.5'
                  y1='0'
                  x2='11.5'
                  y2='23'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#903AFF' />
                  <stop offset='1' stopColor='#FF26B9' />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </button>

        <div className='hidden lg:block'>
          <h1 className='mb-6 font-clash text-[32px] text-pink'>
            Get in touch
          </h1>

          <ul className='space-y-4 text-base'>
            <li>
              Contact
              <br />
              Infomation
            </li>

            <li>
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </li>

            <li>Call Us : 07067981819</li>

            <li>
              We are open from Monday-Friday <br /> 08:00am - 05:00pm
            </li>
          </ul>

          {/* Desktop socials links */}
          <div className='hidden lg:block'>
            <p className='text-sm text-pink mt-10 mb-2'>Share on</p>

            <ul className='flex items-center gap-x-[10px]'>
              {[
                { text: 'instagram', url: instagramIcon },
                { text: 'X', url: xIcon },
                { text: 'facebook', url: facebookIcon },
                { text: 'linkedIn', url: linkedInIcon },
              ].map((item) => (
                <li key={item.text}>
                  <Image
                    src={item.url}
                    alt={`Check out our ${item.url} page`}
                    className='w-5 h-5'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className='lg:bg-white lg:bg-opacity-5 lg:rounded-xl lg:py-16 lg:px-24 max-w-[620px] w-full relative
        
        '
        >
          <span className='absolute blink animate-delay-75 bottom-[8.31rem] -left-3'>
            <Image
              src={starPurpleSm}
              alt=''
              aria-hidden
              className='md:hidden'
            />
            <Image
              src={starPurpleLg}
              alt=''
              aria-hidden
              className='hidden md:block'
            />
          </span>

          <div className='max-w-[14.75rem] lg:max-w-none'>
            <h1 className='text-pink font-clash text-lg'>
              Questions or need assistance?
              <br />
              Let us know about it!
            </h1>

            <p className='text-xs mb-[30px] mt-6 lg:hidden'>
              Email us below to any question related to our event
            </p>
          </div>

          <form method='post'>
            <ul className='space-y-6 lg:space-y-10'>
              {[
                {
                  placeholder: "Team's Name",
                  id: 'user_team',
                  type: 'text',
                },
                {
                  placeholder: 'Topic',
                  id: 'user_topic',
                  type: 'text',
                },
                {
                  placeholder: 'Email',
                  id: 'user_email',
                  type: 'email',
                },
              ].map((item) => (
                <li key={item.id} className='lg:hidden'>
                  <input
                    type={item.type}
                    name={item.id}
                    id={item.id}
                    placeholder={item.placeholder}
                    required
                    className='block w-full bg-white bg-opacity-5 border border-white rounded-[4px] py-3 pl-6 lg:px-6 font-montserrat placeholder:text-white'
                  />
                </li>
              ))}

              {[
                {
                  placeholder: 'First Name',
                  id: 'user_team',
                  type: 'text',
                },
                {
                  placeholder: 'Mail',
                  id: 'user_email',
                  type: 'email',
                },
              ].map((item) => (
                <li key={item.id} className='lg:hidde'>
                  <input
                    type={item.type}
                    name={item.id}
                    id={item.id}
                    placeholder={item.placeholder}
                    required
                    className='block w-full bg-white bg-opacity-5 border border-white rounded-[4px] py-3 pl-6 lg:px-6 font-montserrat placeholder:text-white'
                  />
                </li>
              ))}

              <li>
                <textarea
                  id='user_message'
                  placeholder='Message'
                  rows={4}
                  className='block w-full bg-white bg-opacity-5 border border-white rounded-[4px] p-6 font-montserrat placeholder:text-white resize-none'
                ></textarea>
              </li>
            </ul>

            <div className='w-fit mx-auto'>
              <button
                type='submit'
                aria-label='Click to move to contact page'
                className='mt-[30px] w-[172px] text-white bg-gradient-to-r from-primary-alt to-primary py-4 rounded-[4px] transition-colors duration-150 ease-in hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-600'
              >
                Submit
              </button>
            </div>
          </form>

          {/* Mobile Socials Links */}

          <div className='text-center mx-auto lg:hidden'>
            <p className='text-sm text-pink mt-10 mb-2'>Share on</p>

            <ul className='flex items-center justify-center gap-x-[10px]'>
              {[
                { text: 'instagram', url: instagramIcon },
                { text: 'X', url: xIcon },
                { text: 'facebook', url: facebookIcon },
                { text: 'linkedIn', url: linkedInIcon },
              ].map((item) => (
                <li key={item.text}>
                  <Image
                    src={item.url}
                    alt={`Check out our ${item.url} page`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
