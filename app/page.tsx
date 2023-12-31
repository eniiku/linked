import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Navbar from '@/components/Navbar';

// Hero section imports
import manMobileImg from '@/public/images/hero/man-mobile.png';
import manDesktopImg from '@/public/images/hero/man-desktop.png';
import globeMobileImg from '@/public/images/hero/globe-mobile.png';
import globeDesktopImg from '@/public/images/hero/globe-desktop.png';
import bomb from '@/public/images/hero/bomb.png';
import bombLg from '@/public/images/hero/bomb-lg.png';
import chain from '@/public/images/hero/chain.png';
import chainLg from '@/public/images/hero/chain-lg.png';

// Overview section imports
import ideaSmImg from '@/public/images/overview/idea-sm.png';
import ideaLgImg from '@/public/images/overview/idea-lg.png';

// Rules section imports
import rulesSmImg from '@/public/images/rules/rules-sm.png';
import rulesLgImg from '@/public/images/rules/rules-lg.png';

// Criteria section imports
import criteriaSmImg from '@/public/images/criteria/criteria-sm.png';
import criteriaLgImg from '@/public/images/criteria/criteria-lg.png';

// FAQ section imports
import faqSmImg from '@/public/images/faq/faq-sm.png';
import faqLgImg from '@/public/images/faq/faq-lg.png';

// Prizes section Imports
import prizesSmImg from '@/public/images/prizes/prizes-sm.png';
import prizesLgImg from '@/public/images/prizes/prizes-lg.png';

// Partners section imports
import libertySmLogo from '@/public/images/partners/liberty-logo-sm.png';
import libertyLgLogo from '@/public/images/partners/liberty-logo-lg.png';
import paySmLogo from '@/public/images/partners/liberty-pay-logo-sm.png';
import payLgLogo from '@/public/images/partners/liberty-pay-logo-lg.png';
import winwiseSmLogo from '@/public/images/partners/winwise-logo-sm.png';
import winwiseLgLogo from '@/public/images/partners/winwise-logo-lg.png';
import whispermsSmLogo from '@/public/images/partners/whispersms-logo-sm.png';
import whispermsLgLogo from '@/public/images/partners/whispersms-logo-lg.png';
import payboxSmLogo from '@/public/images/partners/paybox-logo-sm.png';
import payboxLgLogo from '@/public/images/partners/paybox-logo-lg.png';
import vizualSmLogo from '@/public/images/partners/vizual-logo-sm.png';
import vizualLgLogo from '@/public/images/partners/vizual-logo-lg.png';

// Privacy section imports
import privacySmImg from '@/public/images/privacy/privacy-sm.png';
import privacyLgImg from '@/public/images/privacy/privacy-lg.png';
import checkIcon from '@/public/images/privacy/check.svg';

// Footer section imports
import xIcon from '@/public/svg/x.svg';
import facebookIcon from '@/public/svg/facebook.svg';
import linkedInIcon from '@/public/svg/linkedin.svg';
import instagramIcon from '@/public/svg/instagram.svg';
import Accordion from '@/components/Accordion';

export default function Home() {
  return (
    <main className='text-white'>
      <Navbar />

      {/* HERO SECTION */}

      <section className='border-t border-white border-opacity-20'>
        <div className='lg:flex items-end relative flare px-12 lg:px-32 max-w-screen-2xl mx-auto overflow-hidden'>
          <div className='font-montserrat text-center lg:text-left lg:max-w-[50rem]'>
            <h3 className='font-bold italic text-base mt-8 lg:text-4xl whitespace-nowrap lg:hidden'>
              Igniting a Revolution in{' '}
              <span className='relative hero_dec'>HR Innovation</span>
            </h3>

            <h1 className='font-clash text-[32px] mt-14 lg:text-[80px] leading-[1.15] lg:mt-[12.44rem]'>
              getlinked <span className='relative hero_bulb_dec'>Tech</span>{' '}
              Hackathon <span className='text-pink'>1.0</span>
              <span>
                <Image
                  src={chain}
                  alt=''
                  aria-hidden
                  className='inline-flex md:hidden'
                />

                <Image
                  src={chainLg}
                  alt=''
                  aria-hidden
                  className='hidden md:inline-flex'
                />
              </span>
              <span>
                <Image
                  src={bomb}
                  alt=''
                  aria-hidden
                  className='inline-flex md:hidden'
                />
                <Image
                  src={bombLg}
                  alt=''
                  aria-hidden
                  className='hidden md:inline-flex'
                />
              </span>
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

            <div className='absolute hidden lg:block -bottom-4 right-0'>
              <div>
                <h3 className='font-bold italic mt-4 text-4xl whitespace-nowrap absolute -top-24 right-20'>
                  Igniting a Revolution in{' '}
                  <span className='relative hero_dec'>HR Innovation</span>
                </h3>
              </div>

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
        className='border-t border-white border-opacity-20'
      >
        <div className='lg:flex items-center justify-center gap-[6.81rem] pt-7 pb-14 lg:py-16 px-12 lg:px-32 max-w-screen-2xl mx-auto'>
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

      {/* RULES SECTION */}
      <section className='border-t border-white border-opacity-20'>
        <div className='lg:flex flex-row-reverse items-center px-12 lg:px-32 max-w-screen-2xl mx-auto font-montserrat text-white '>
          <div className='w-fit mx-auto lg:w-auto lg:m-0'>
            <Image
              src={rulesSmImg}
              alt=''
              quality={100}
              className='md:hidden'
            />
            <Image
              src={rulesLgImg}
              alt=''
              quality={100}
              className='hidden md:block'
            />
          </div>

          <div className='text-center lg:text-left'>
            <h1 className='font-clash font-bold text-xl mt-3 mb-2 lg:text-[2rem] leading-snug'>
              Rules and <br /> <span className='text-pink'>Guidelines</span>
            </h1>

            <p className='text-[0.8125rem] leading-[211.53%] lg:max-w-[33rem] lg:text-sm lg:mt-1 lg:leading-[196.429%]'>
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
        className='border-t border-white border-opacity-20'
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
            <h1 className='font-clash text-xl mb-4 lg:text-[2rem] leading-[2.25rem]'>
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

      {/* FAQ Section */}

      <section id='faq' className='border-t border-white border-opacity-20'>
        <div className='lg:flex items-center justify-center gap-x-[1.56rem] px-12 lg:px-32 max-w-screen-2xl mx-auto font-montserrat text-white py-14 lg:pt-[7.63rem]'>
          <div className='mb-[5.4rem] lg:mb-24'>
            <h1 className='mb-[0.37rem] text-center lg:text-left font-clash font-bold text-xl lg:text-[2rem] leading-snug lg:mb-4'>
              Frequently Ask <br />
              <span className='text-pink'>Question</span>
            </h1>

            <p className='text-xs text-center lg:text-left leading-[27.5px] mb-[2.56rem] lg:text-sm lg:max-w-[21.375rem] lg:leading-[196%] lg:mb-12'>
              We got answers to the questions that you might want to ask about{' '}
              <a href='#overview' className='font-bold'>
                getlinked Hackathon 1.0
              </a>
            </p>

            {/* faq accordion */}
            <Accordion
              items={[
                {
                  title:
                    'Can I work on a project I started before the hackathon?',
                  content: 'Further explanation is unavailable at the moment',
                },
                {
                  title: 'What happens if I need help during the hackathon?',
                  content: 'Further explanation is unavailable at the moment',
                },
                {
                  title: "What happens if I don't have an idea for a project?",
                  content: 'Further explanation is unavailable at the moment',
                },
                {
                  title: 'Can I join a team or do I have to come with one?',
                  content: 'Further explanation is unavailable at the moment',
                },
                {
                  title: 'What happens after the hackathon ends',
                  content: 'Further explanation is unavailable at the moment',
                },
                {
                  title:
                    'Can I work on a project I started before the hackathon?',
                  content: 'Further explanation is unavailable at the moment',
                },
              ]}
            />
          </div>

          <div className='relative'>
            {/* Decorative question marks */}
            <div className='absolute -top-2 left-12 flex gap-12 font-tommy font-medium text-[2rem] lg:text-8xl lg:-top-12 lg:left-[4.5rem] lg:gap-[120px] text-primary'>
              <span className='text-stroke lg:mt-4'>?</span>
              <span className='text-stroke-main text-[4rem] -mt-12 lg:text-9xl lg:-mt-6rem text-pink'>
                ?
              </span>
              <span className='text-stroke lg:mt-4'>?</span>
            </div>

            <Image src={faqSmImg} alt='' quality={100} className='md:hidden' />
            <Image
              src={faqLgImg}
              alt=''
              quality={100}
              className='hidden md:block'
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}

      <section
        id='timeline'
        className='border-t border-white border-opacity-20'
      >
        <div className='px-12 lg:px-32 max-w-screen-2xl mx-auto font-montserrat text-white py-20'>
          <div className='text-center mb-14 lg:mb-[5.69rem]'>
            <h1 className='font-clash font-bold text-xl lg:text-[2rem]'>
              Timeline
            </h1>

            <p className='leading-[172%] text-sm mt-2 lg:mt-3 lg:max-w-[21.625rem] lg:mx-auto'>
              Here is the breakdown of the time we anticipate using for the
              upcoming event.
            </p>
          </div>

          <ul className='space-y-10 relative reorder lg:space-y-[5.44rem] direction pt-1'>
            <li className='center-line'></li>
            {[
              {
                title: 'Hackathon Announcement',
                content:
                  'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
              },
              {
                title: 'Teams Registration begins',
                content:
                  'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
              },
              {
                title: 'Teams Registration ends',
                content:
                  'Interested Participants are no longer Allowed to register',
              },
              {
                title: 'Announcement of the accepted teams and ideas',
                content:
                  'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
              },
              {
                title: 'Getlinked Hackathon 1.0 Offically Begins',
                content:
                  'Accepted teams can now proceed to build their ground breaking skill driven solutions',
              },
              {
                title: 'Demo Day',
                content:
                  'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
              },
            ].map((item, index) => (
              <li
                key={item.title}
                className='relative text-xs lg:text-2xl border-l-2 border-pink pl-[1.19rem] lg:border-none lg:pl-0 lg:w-full lg:grid grid-cols-2 items-end gap-x-[14.81rem] direction-rtl'
              >
                <div className='lg:text-right'>
                  <h2 className='text-pink font-bold'>{item.title}</h2>

                  <p className='leading-[170.9%] my-[0.4rem] lg:text-base lg:mt-3 lg:mb-0 lg:max-w-[485px]'>
                    {item.content}
                  </p>

                  <time className='text-pink font-bold lg:hidden'>
                    November 18, 2023
                  </time>
                </div>

                <time className='text-pink font-bold hidden lg:grid'>
                  November 18, 2023
                </time>

                <span className='absolute -left-[18px] -bottom-[6px] bg-purple p-[6px] lg:p-[11px] z-10 h-fit center-line-align flex items-center justify-center'>
                  <span className='w-5 h-5 font-bold bg-gradient-to-l from-primary to-pink rounded-full flex items-center justify-center lg:w-[53px] lg:h-[53px]'>
                    {index + 1}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRIZES SECTION */}

      <section className='relative prizes-mask overflow-hidden'>
        <div className='px-12 lg:px-32 max-w-screen-2xl mx-auto font-montserrat pt-[4.5rem] pb-[5.5rem] lg:flex lg:gap-8 lg:items-end'>
          <div className='text-center lg:hidden'>
            <h1 className='font-clash font-bold text-xl'>
              Prizes and <br /> <span className='text-pink'>Rewards</span>
            </h1>

            <p className='px-3 leading-[170%] text-xs'>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>

          <div className='mt-10 mb-32'>
            <Image
              src={prizesSmImg}
              alt=''
              quality={100}
              className='md:hidden'
            />
            <Image src={prizesLgImg} alt='' className='hidden md:block' />
          </div>

          <div>
            <div className='hidden lg:block mb-[270px] ml-[186px]'>
              <h1 className='font-clash font-bold lg:text-[2rem] leading-snug'>
                Prizes and <br /> <span className='text-pink'>Rewards</span>
              </h1>

              <p className='leading-[170%] text-base mt-4 max-w-[25rem]'>
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>

            <ul className='flex gap-x-3 lg:gap-x-[30px]'>
              <li className='h-[125px] lg:h-[300px] border border-pink bg-[#D434FE] bg-opacity-[0.12] rounded-lg px-3 pb-5 lg:px-[30px] lg:pb-8 relative silver-medal flex items-end'>
                <div className='text-xs text-center'>
                  <h3 className='font-bold lg:text-4xl'>
                    2nd <br />
                    <span className='font-semibold lg:text-2xl'>Runner</span>
                  </h3>
                  <p className='font-bold text-sm lg:text-[2rem] leading-[216.4%] text-pink'>
                    N300,000
                  </p>
                </div>
              </li>

              <li className='h-[140px] lg:h-[320px] border border-primary bg-[#903AFF] bg-opacity-[0.12] rounded-lg px-3 pb-5 lg:px-[30px] lg:pb-8 relative gold-medal flex items-end'>
                <div className='text-xs text-center'>
                  <h3 className='font-bold lg:text-4xl'>
                    1st <br />
                    <span className='font-semibold lg:text-2xl'>Runner</span>
                  </h3>
                  <p className='font-bold text-sm lg:text-[2rem] leading-[216.4%] text-primary'>
                    N400,000
                  </p>
                </div>
              </li>

              <li className='h-[125px] lg:h-[300px] border border-pink bg-[#D434FE] bg-opacity-[0.12] rounded-lg px-3 pb-5 lg:px-[30px] lg:pb-8 relative bronze-medal flex items-end'>
                <div className='text-xs text-center'>
                  <h3 className='font-bold lg:text-4xl'>
                    3rd <br />
                    <span className='font-semibold lg:text-2xl'>Runner</span>
                  </h3>
                  <p className='font-bold text-sm lg:text-[2rem] leading-[216.4%] text-pink'>
                    N150,000
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}

      <section className='bg-white bg-opacity-[0.01]'>
        <div className='px-12 lg:px-32 max-w-screen-2xl mx-auto pt-10 pb-24 font-montserrat lg:py-32'>
          <div className='text-center'>
            <h1 className='font-clash font-bold text-xl lg:text-[2rem]'>
              Partners and Sponsors
            </h1>
            <p className='text-xs leading-[20.5px] lg:text-sm lg:mt-[1.38rem] lg:max-w-[28.25rem] lg:mx-auto'>
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>

          <ul
            className='bg-white bg-opacity-[0.01] border border-pink rounded-md px-12 py-9 grid grid-cols-3 items-center justify-center custom-grid-alt relative mt-10 lg:mt-[4.06rem]
            lg:py-36 lg:px-44'
          >
            {[
              {
                sm: libertySmLogo,
                lg: libertyLgLogo,
                label: 'Liberty Assured',
              },
              { sm: paySmLogo, lg: payLgLogo, label: 'Liberty Pay' },
              { sm: winwiseSmLogo, lg: winwiseLgLogo, label: 'WinWise' },
              { sm: whispermsSmLogo, lg: whispermsLgLogo, label: 'Whisperms' },
              { sm: payboxSmLogo, lg: payboxLgLogo, label: 'Paybox' },
              {
                sm: vizualSmLogo,
                lg: vizualLgLogo,
                label: 'Vizual Plus Design Studios',
              },
            ].map((item) => (
              <li
                key={item.label}
                className='p-2 border lg:border-2 w-full h-full border-pink custom-grid lg:py-8 lg:px-12 flex items-center justify-center'
              >
                <Image src={item.sm} alt={item.label} className='lg:hidden' />
                <Image
                  src={item.lg}
                  alt={item.label}
                  className='hidden lg:block'
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Privacy Section */}
      <section className='border-t border-white border-opacity-20'>
        <div className='lg:flex items-center justify-center px-12 lg:px-32 max-w-screen-2xl mx-auto font-montserrat text-white py-20 lg:pt-[10.56rem] lg:pb-40 lg:gap-x-[3.12rem]'>
          <div className='lg:max-w-[35.6rem]'>
            <div className='text-center lg:text-left'>
              <h1 className='font-clash font-bold text-xl lg:text-[2rem] leading-snug'>
                Privacy Policy and <br />
                <span className='text-pink'>Terms</span>
              </h1>

              <p className='text-xs leading-[229.167%] text-opacity-75 lg:text-sm lg:mt-4'>
                Last updated on September 12, 2023
              </p>
            </div>

            <div className='text-xs lg:text-sm'>
              <h3 className='my-7 text-center leading-[188.4%] lg:text-left lg:max-w-[27.375rem] lg:mt-7 lg:mb-[4.31rem]'>
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </h3>

              <div className='border border-pink bg-[#D9D9D9] bg-opacity-[0.03] px-4 py-11 rounded-[5px] mb-[8.88rem] lg:mb-0 lg:px-[4.5rem] lg:py-14'>
                <h4 className='text-center leading-[216.4%] lg:text-left'>
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </h4>

                <h6 className='mt-5 text-pink leading-[216.4%] font-bold lg:mt-6'>
                  Licensing Policy
                </h6>
                <h4 className='font-bold'>
                  Here are terms of our Standard License:
                </h4>

                <ul className='space-y-6 my-6'>
                  {[
                    'The Standard License grants you a non-exclusive right to navigate and register for our event',
                    'You are licensed to use the item available at any free source sites, for your project developement',
                  ].map((item) => (
                    <li
                      key={item}
                      className='flex items-start gap-x-[14px] leading-[175.9%]'
                    >
                      <Image
                        src={checkIcon}
                        alt=''
                        aria-hidden
                        className='mt-[2px]'
                      />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>

                <div className='w-fit mx-auto'>
                  <button
                    aria-label='Click to read more about the hackathon'
                    className='w-[97px] text-[0.75rem] lg:text-base py-2 lg:py-4 lg:w-[172px] font-montserrat text-white bg-gradient-to-r from-primary-alt to-primary rounded-[4px] transition-colors duration-150 ease-in 
                  
                  hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-600'
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='relative privacy-mask'>
            <Image src={privacySmImg} alt='' className='md:hidden' />
            <Image src={privacyLgImg} alt='' className='hidden md:block' />
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className='bg-[#100B20]'>
        <div className='font-montserrat text-white px-12 py-14 lg:px-32 lg:pb-11 lg:pt-16 max-w-screen-2xl mx-auto'>
          <div className='space-y-8 lg:space-y-0 lg:grid grid-cols-4'>
            <div className='text-xs col-span-2 lg:h-full lg:flex lg:flex-col lg:justify-between'>
              <h1 className='font-clash text-xl font-bold whitespace-nowrap lg:text-3xl'>
                get<span className='text-pink'>linked</span>
              </h1>

              <p className='leading-[172.4%] mt-3 mb-10 lg:max-w-[413px]'>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>

              <div>
                <a href='#'>Terms of use</a>
                <span className='text-pink text-base font-semibold'> | </span>
                <a href='#'>Privacy Policy</a>
              </div>
            </div>

            <div>
              <h3 className='font-montserrat font-semibold text-sm leading-[172.4%] mb-3 text-pink'>
                Useful Links
              </h3>

              <ul className='text-xs leading-[172.4%] space-y-3'>
                <li>
                  <a href='#overview'>Overview</a>
                </li>

                <li>
                  <a href='#timeline'>Timeline</a>
                </li>

                <li>
                  <a href='#faq'>FAQ's</a>
                </li>

                <li>
                  <Link href='/register'>Register</Link>
                </li>
              </ul>

              <div className='flex items-center gap-4 mt-3'>
                <p className='text-pink text-xs'>Follow us</p>
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

            <div>
              <h3 className='font-montserrat font-semibold text-sm leading-[172.4%] mb-3 text-pink'>
                Contact Us
              </h3>

              <ul className='text-xs leading-[172.4%] space-y-6'>
                <li>
                  <p>
                    <span className='inline-flex ites-center mr-4'>
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        aria-hidden
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z'
                          fill='#F8F8F8'
                        />
                        <path
                          d='M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z'
                          fill='#F8F8F8'
                        />
                      </svg>
                    </span>
                    +234 679 81819
                  </p>
                </li>

                <li>
                  <p className='flex items-start gap-4'>
                    <span>
                      <svg
                        width='13'
                        height='15'
                        viewBox='0 0 13 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden
                      >
                        <path
                          d='M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z'
                          fill='#F8F8F8'
                        />
                      </svg>
                    </span>
                    27,Alara Street <br />
                    Yaba 100012 <br />
                    Lagos State
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <hr className='mt-14 opacity-0' />

          <p className=' text-center text-xs'>
            All rights reserved. © getlinked Ltd.
          </p>
        </div>
      </footer>
    </main>
  );
}
