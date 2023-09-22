import Image from 'next/image';

import Button from '@/components/Button';
import Navbar from '@/components/Navbar';

// Hero section imports
import manMobileImg from '@/public/images/hero/man-mobile.png';
import manDesktopImg from '@/public/images/hero/man-desktop.png';
import globeMobileImg from '@/public/images/hero/globe-mobile.png';
import globeDesktopImg from '@/public/images/hero/globe-desktop.png';

// Overview section imports
import ideaSmImg from '@/public/images/overview/idea-sm.png';
import ideaLgImg from '@/public/images/overview/idea-lg.png';

//Criteria section imports
import criteriaSmImg from '@/public/images/criteria/criteria-sm.png';
import criteriaLgImg from '@/public/images/criteria/criteria-lg.png';

export default function Home() {
  return (
    <main className='text-white'>
      <Navbar />

      {/* HERO SECTION */}

      <section className='border-t border-white border-opacity-20'>
        <div className='lg:flex items-end relative flare px-12 lg:px-32 max-w-screen-2xl mx-auto'>
          <div className='font-montserrat text-center lg:text-left'>
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
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
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
                priority
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
                priority
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
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section
        id='overview'
        className='border-y border-white border-opacity-20'
      >
        <div className='lg:flex items-center pt-7 pb-14 lg:py-16 px-12 lg:px-32 max-w-screen-2xl mx-auto'>
          <div className='relative arrow mb-10'>
            <Image
              alt='Picture of a collection of ideas'
              src={ideaSmImg}
              placeholder='blur'
              quality={100}
              className='md:hidden mx-auto'
            />

            <Image
              alt='Picture of a collection of ideas'
              src={ideaLgImg}
              placeholder='blur'
              quality={100}
              className='hidden md:block'
            />
          </div>

          <div className='text-center lg:text-left'>
            <h1 className='font-clash font-bold text-xl leading-[133%] lg:text-[32px]'>
              Introduction to getlinked
              <br />
              <span className='text-pink'>tech Hackathon 1.0</span>
            </h1>

            <p className='font-montserrat leading-[27.5px] text-[13px] mt-2 lg:text-sm lg:max-w-[33rem]'>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
      </section>

      {/* CRITERIA SECTION */}

      <section
        id='criteria'
        className='border-y border-white border-opacity-20'
      >
        <div className='lg:flex pt-20 pb-14 px-12 lg:px-32 max-w-screen-2xl mx-auto relative flare-cri lg:gap-[3.31rem] lg:items-end lg:pt-24 lg:pb-28'>
          <div className='relative flare-cri-img'>
            <Image
              alt='Picture of a collection of ideas'
              src={criteriaSmImg}
              placeholder='blur'
              quality={100}
              className='md:hidden mx-auto'
            />

            <Image
              alt='Picture of a collection of ideas'
              src={criteriaLgImg}
              placeholder='blur'
              quality={100}
              className='hidden md:block'
            />
          </div>

          <div className='text-center lg:text-left lg:max-w-[35.5rem]'>
            <h1 className='font-clash text-lg mb-4 lg:text-[2rem] leading-[2.25rem]'>
              Judging Criteria
              <br />
              <span className='text-pink'>Key attributes</span>
            </h1>

            <ul className='space-y-4 lg:space-y-6 mb-5 lg:mb-14'>
              {[
                {
                  title: 'Innovation and Creativity:',
                  text: 'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.',
                },
                {
                  title: 'Functionality',
                  text: 'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution',
                },
                {
                  title: 'Impact and Relevance',
                  text: 'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.',
                },
                {
                  title: 'Technical Complexity',
                  text: 'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.',
                },
                {
                  title: 'Adherence to Hackathon Rules',
                  text: 'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements',
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className='font-montserrat text-sm leading-[173.5%]'
                >
                  <span className='font-bold text-[13px] text-pink lg:text-base'>
                    {item.title}
                  </span>{' '}
                  {item.text}
                </li>
              ))}
            </ul>

            <button
              aria-label='Click to read more about the hackathon'
              className='w-[97px] text-[0.75rem] lg:text-base py-2 lg:py-4 lg:w-[172px] font-montserrat text-white bg-gradient-to-r from-primary-alt to-primary rounded-[4px] transition-colors duration-150 ease-in 
              
              hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-600'
            >
              Read More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
