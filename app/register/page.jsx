'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

import heroSmImg from '@/public/images/register/register-sm.png';
import heroLgImg from '@/public/images/register/register-lg.png';
import winkImg from '@/public/images/register/wink.png';
import congratulateSmImg from '@/public/images/register/register-congratulate-sm.png';
import congratulateLgImg from '@/public/images/register/register-congratulate-lg.png';
import starPurpleSm from '@/public/images/shared/star-purple-sm.png';
import starPurpleLg from '@/public/images/shared/star-purple-lg.png';
import starGreySm from '@/public/images/shared/star-grey-sm.png';
import starGreyLg from '@/public/images/shared/star-grey-lg.png';
import starPinkSm from '@/public/images/shared/star-pink-sm.png';
import starPinkLg from '@/public/images/shared/star-pink-lg.png';
import Navbar from '@/components/Navbar';

export default function Register() {
  const [userData, setUserData] = useState({
    email: '',
    phone_number: '',
    team_name: '',
    group_size: 1,
    project_topic: '',
    category: 1,
    privacy_poclicy_accepted: false,
  });
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const REGISTER_URL = 'https://backend.getlinked.ai/hackathon/register';

  const handleChange = (e) => {
    const newData = { ...userData };
    newData[e.target.id] = e.target.value;
    setUserData(newData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSignUpSuccess(true);

    axios
      .post(
        REGISTER_URL,
        {
          email: userData.email,
          phone_number: userData.phone_number,
          team_name: userData.team_name,
          group_size: userData.group_size,
          project_topic: userData.project_topic,
          category: userData.category,
          privacy_poclicy_accepted: userData.privacy_poclicy_accepted,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        res.statusText === 'OK'
          ? setSignUpSuccess(true)
          : console.log('There seems to be an error');
      })
      .catch((err) => console.log(err));
  };
  return (
    <main>
      {signUpSuccess ? (
        <div className='grid place-items-center bg-[#150E28] bg-opacity-[0.93] fixed inset-0 z-50 h-screen w-full font-montserrat text-white p-9'>
          <div className='border border-pink rounded-md bg-white bg-opacity-[0.01] px-7 py-5 lg:w-[700px] lg:h-[665px] relative flex flex-col items-center'>
            {/* Decorative elements */}
            <span className='absolute -right-1 -top-4 lg:-right-6 lg:-top-8 blink'>
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

            <span className='absolute top-1/3 left-8 blink animate-delay-100 lg:left-20'>
              <Image
                src={starGreySm}
                alt=''
                aria-hidden
                className='md:hidden'
              />
              <Image
                src={starGreyLg}
                alt=''
                aria-hidden
                className='hidden md:block'
              />
            </span>
            <span className='absolute -bottom-8 right-4 blink animate-delay-75 lg:bottom-4 lg:right-12'>
              <Image
                src={starPinkSm}
                alt=''
                aria-hidden
                className='md:hidden'
              />
              <Image
                src={starPinkLg}
                alt=''
                aria-hidden
                className='hidden md:block'
              />
            </span>

            <div className='w-fit mx-auto'>
              <Image
                src={congratulateSmImg}
                alt=''
                className='md:hidden'
                quality={100}
              />
              <Image
                src={congratulateLgImg}
                alt=''
                className='hidden md:block'
                quality={100}
              />
            </div>

            <div className='text-center'>
              <h1 className='font-semibold max-w-[11.125rem] mx-auto lg:max-w-none lg:text-[32px]'>
                Congratulations <br className='hidden lg:block' /> you have
                successfully Registered!
              </h1>

              <div className='mb-6 mt-7 text-xs max-w-[13.5rem] mx-auto flex items-end leading-normal lg:font-semibold lg:text-sm lg:max-w-[255px]'>
                <p>
                  Yes, it was easy and you did it! check your mail box for next
                  step
                </p>
                <Image
                  src={winkImg}
                  alt=''
                  className='w-[14px] h-[14px] lg:w-5 lg:h-5 mb-[2px]'
                />
              </div>

              <Link href='/'>
                <button
                  type='submit'
                  aria-label='Click to move to contact page'
                  className='lg:mt-5 min-w-full text-white bg-gradient-to-r from-primary-alt to-primary py-4 rounded-[4px] transition-colors duration-150 ease-in hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-600'
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
      <Navbar />

      <section className='px-12 lg:px-32 max-w-screen-2xl mx-auto text-white py-6 font-montserrat lg:grid grid-cols-[auto_1fr] lg:items-end lg:py-16 relative flare-alt overflow-hidden'>
        <h1 className='lg:hidden font-clash font-bold mb-8 text-pink'>
          Register
        </h1>
        <div className='-ml-32'>
          <Image
            src={heroSmImg}
            alt=''
            className='md:hidden mx-auto'
            placeholder='blur'
            loading='lazy'
          />
          <Image
            src={heroLgImg}
            alt=''
            className='hidden md:block'
            placeholder='blur'
            loading='lazy'
          />
        </div>

        <div className='lg:bg-white lg:bg-opacity-5 lg:rounded-xl lg:py-16 lg:px-24 max-w-[740px] w-full'>
          <div>
            <h1 className='hidden lg:block font-clash font-bold text-[32px] text-pink'>
              Register
            </h1>

            <p className='mt-4 text-xs lg:text-[14px] lg:mt-6'>
              Be part of this movement!
            </p>

            <h3 className='mt-2 text-lg lg:text-2xl lg:mt-5'>
              CREATE YOUR ACCOUNT
            </h3>
          </div>

          <form
            onSubmit={(e) => handleFormSubmit(e)}
            method='post'
            className='mt-6 lg:mt-8'
          >
            <ul className='space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-y-7 lg:gap-x-8 lg:items-center'>
              {[
                {
                  label: "Team's name",
                  placeholder: 'Enter the name of your group',
                  id: 'team_name',
                  type: 'text',
                  value: userData.team_name,
                },
                {
                  label: 'Phone',
                  placeholder: 'Enter your phone number',
                  id: 'phone_number',
                  type: 'number',
                  value: userData.phone_number,
                },
                {
                  label: 'Email',
                  placeholder: 'Enter your email address',
                  id: 'email',
                  type: 'email',
                  value: userData.email,
                },
                {
                  label: 'Project Topic',
                  placeholder: 'What is your group project topic',
                  id: 'project_topic',
                  type: 'text',
                  value: userData.project_topic,
                },
              ].map((item) => (
                <li key={item.id} className='text-[13px] lg:text-[14px]'>
                  <label htmlFor={item.id} className='mb-2 lg:mb-3 block'>
                    {item.label}
                  </label>

                  <input
                    type={item.type}
                    name={item.id}
                    id={item.id}
                    placeholder={item.placeholder}
                    required
                    onChange={(e) => handleChange(e)}
                    value={item.value}
                    className='block w-full bg-white bg-opacity-5 border border-white rounded-[4px] py-3 pl-6 lg:px-6 placeholder:text-white placeholder:text-opacity-25'
                  />
                </li>
              ))}

              <li className='grid grid-cols-[1fr_auto] gap-5 lg:gap-8 lg:grid-cols-2 lg:col-span-2'>
                {[
                  {
                    label: 'Category',
                    placeholder: 'Select your category',
                    id: 'category',
                    value: userData.category,
                  },
                  {
                    label: 'Group Size',
                    placeholder: 'Select',
                    id: 'user_team_size',
                    value: userData.group_size,
                  },
                ].map((item) => (
                  <div key={item.id} className='text-[13px] lg:text-[14px]'>
                    <label htmlFor={item.id} className='mb-2 lg:mb-3 block'>
                      {item.label}
                    </label>
                    <select
                      name={item.id}
                      id={item.id}
                      value={item.value}
                      className='block w-full bg-white bg-opacity-5 border border-white rounded-[4px] py-3 px-[10px] lg:px-6 placeholder:text-white placeholder:text-opacity-25'
                      onChange={(e) => handleChange(e)}
                    >
                      <option value='uno'>{item.placeholder}</option>
                    </select>
                  </div>
                ))}
              </li>
            </ul>

            <p className='italic text-[9px] mt-4 text-[#FF26B9] lg:mt-6 lg:text-sm'>
              Please review your registration details before submitting
            </p>

            <div className='flex items-start lg:items-center mt-3'>
              <input
                type='checkbox'
                name='privacy_poclicy_accepted'
                aria-describedby='privacy_poclicy_accepted'
                id='privacy_poclicy_accepted'
                className='bg-purple'
                value='privacy_poclicy_accepted'
                onChange={(e) => handleChange(e)}
              />
              <label
                htmlFor='privacy_poclicy_accepted'
                className='text-[10px] ml-[10px] lg:text-sm'
              >
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>

            <div className='w-fit lg:w-auto mx-auto'>
              <button
                type='submit'
                aria-label='Click to move to contact page'
                className='md:hidden mt-[14px] w-[172px] text-white bg-gradient-to-r from-primary-alt to-primary py-4 rounded-[4px] transition-colors duration-150 ease-in hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-600'
              >
                Submit
              </button>

              <button
                type='submit'
                aria-label='Click to move to contact page'
                className='hidden md:block mt-5 min-w-full text-white bg-gradient-to-r from-primary-alt to-primary py-4 rounded-[4px] transition-colors duration-150 ease-in hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-600'
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
