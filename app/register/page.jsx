import Image from 'next/image';

import heroSmImg from '@/public/images/register/register-sm.png';
import heroLgImg from '@/public/images/register/register-lg.png';

export default function Register() {
  return (
    <section className='px-12 lg:px-32 max-w-screen-2xl mx-auto text-white py-6 font-montserrat lg:grid grid-cols-[auto_1fr] lg:items-end lg:py-16'>
      <h1 className='lg:hidden font-clash font-bold mb-8'>Register</h1>
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
          <h1 className='hidden lg:block font-clash font-bold text-[32px] '>
            Register
          </h1>

          <p className='mt-4 text-xs lg:text-[14px] lg:mt-6'>
            Be part of this movement!
          </p>

          <h3 className='mt-2 text-lg lg:text-2xl lg:mt-5'>
            CREATE YOUR ACCOUNT
          </h3>
        </div>

        <form action='' method='post' className='mt-6 lg:mt-8'>
          <ul className='space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-y-7 lg:gap-x-8 lg:items-center'>
            {[
              {
                label: "Team's name",
                placeholder: 'Enter the name of your group',
                id: 'user_team',
                type: 'text',
              },
              {
                label: 'Phone',
                placeholder: 'Enter your phone number',
                id: 'user_phone',
                type: 'number',
              },
              {
                label: 'Email',
                placeholder: 'Enter your email address',
                id: 'user_email',
                type: 'email',
              },
              {
                label: 'Project Topic',
                placeholder: 'What is your group project topic',
                id: 'user_project',
                type: 'text',
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
                  className='block w-full bg-white bg-opacity-5 border border-white rounded-[4px] py-3 pl-6 lg:px-6 placeholder:text-white placeholder:text-opacity-25'
                />
              </li>
            ))}

            <li className='grid grid-cols-[1fr_auto] gap-5 lg:gap-8 lg:grid-cols-2 lg:col-span-2'>
              {[
                {
                  label: 'Category',
                  placeholder: 'Select your category',
                  id: 'user_category',
                },
                {
                  label: 'Group Size',
                  placeholder: 'Select',
                  id: 'user_team_size',
                },
              ].map((item) => (
                <div key={item.id} className='text-[13px] lg:text-[14px]'>
                  <label htmlFor={item.id} className='mb-2 lg:mb-3 block'>
                    {item.label}
                  </label>
                  <select
                    name={item.id}
                    required
                    className='block w-full bg-white bg-opacity-5 border border-white rounded-[4px] py-3 px-[10px] lg:px-6 placeholder:text-white placeholder:text-opacity-25'
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
              name='user_consent'
              aria-describedby='user_consent'
              id=''
              className='bg-purple'
            />
            <label
              id='user_consent'
              htmlFor='user_consent'
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
  );
}
