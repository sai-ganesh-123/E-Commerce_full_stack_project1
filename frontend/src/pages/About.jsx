import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente quaerat maxime itaque iste eius ea repudiandae eligendi laudantium reprehenderit consequuntur, excepturi minima ratione odit voluptatum. Quia aliquid eos mollitia!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus unde laboriosam quis temporibus atque veniam quaerat non excepturi repellat voluptas sapiente esse qui veritatis possimus, error dolor necessitatibus nesciunt ipsam.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit molestias ducimus possimus, dolore nemo consectetur corporis harum voluptatibus, eligendi, praesentium iure laboriosam! Architecto inventore dolorem ducimus animi rerum doloremque a.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm md-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit ameto fugiat repudiandae quae nobis atque, quos eaque. Necessitatibus quisquam cumque quaerat quas?</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet,  fugiat repudiandae quae nobis atque, quos eaque. Necessitatibus quisquam cumque quaerat quas?</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit Vel, illo fugiat repudiandae quae nobis atque, quos eaque. Necessitatibus quisquam cumque quaerat quas?</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About