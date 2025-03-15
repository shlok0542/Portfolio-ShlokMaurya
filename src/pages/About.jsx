import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import './About.css'
import {Link} from 'react-router-dom'

function About() {
  return (
    <>
      <div className='flex-col hidden lg:block'>
      <div className='lg:w-full lg:h-screen flex bg-transparent'>
        {/* left */}
        <section className=' lg:bg-orange-200 w-1/3 p-8 '>
          <div className='Profile-card w-90 h-full lg:bg-orange-100 relative left-6 shadow-2xl flex-col '>
            <div className='w-40 h-40 rounded-full bg-[url(/profile-pic.png)] bg-cover bg-center'></div>
            <div className='text-center text-2xl  font-serif mt-4'>Shlok Maurya</div>
            <div className='border-b-2 w-20 border-blue-600 m-5'></div>
            <div className='cursive_style text-center mb-4 text-cyan-600'>Front End Web Developer</div>
            <div className='bg-white flex justify-center items-center p-2  w-full relative top-13 '>
              <Github className='m-2 text-blue-700 ' />
              <Twitter className='m-2 text-blue-700 ' />
              <Linkedin className='m-2 text-blue-700 ' />
              <Instagram className='m-2 text-blue-700 ' />
            </div>
          </div>
        </section>
        {/* right */}
        <section className='h-full pl-40 pt-10 pr-5 w-auto'>
          <h1 className='text-8xl mb-2'>Hello</h1>
          <h6 className='text-xl mb-2'>Here's who I am & what I do</h6>
         <div className='flex'>
         <button className='btn btn-primary pl-6 :pr-6 rounded-4xl mr-5'><Link to='/Resume'>RESUME</Link></button>
         <button className='btn btn-primary pl-6 pr-6 rounded-4xl ml-5'><Link to='/Projects'>PROJECTS</Link></button>
         </div>
          <p className='mt-10 w-full'> I'm <span className='text-blue-600'>Shlok Maurya</span> , a passionate and driven student pursuing Bachelor's in Computer Application(BCA). With a Keen interest in technology and innovation . I've developed skills in frontend web development , specializing in crafting visually stunning and user-friendly interfaces.
            I'm excited to collaborate on projects, learn from others, and grow as a developer.Let's connect!
          </p>
        </section>
      </div>
      </div>
      {/* for mobile */}

      <div className='lg:hidden AboutContainer w-full flex flex-col items-center mb-15'>
      <div className=' w-full h-2/3 bg-[url(/myphoto2.png)] bg-orange-50 bg-cover bg-center bg-no-repeat Myphoto'>

      </div>
        <div className='absolute top-4/5 p-9 bg-white  rounded-t-4xl ProfileCard'>
        <h1 className='text-4xl mb-2 mt-7'>Hi there! 👋 </h1>
        <h6 className='text-xl mb-8'>I'm Shlok Maurya, a passionate frontend developer and tech enthusiast</h6>
        <button className='btn btn-secondary  rounded-4xl mr-5'><Link to='/Resume'>RESUME</Link></button>
      <button className='btn btn-primary rounded-4xl ml-5'><Link to='/Projects'>PROJECTS</Link></button>
          <p className='mt-8 w-full text-center cursive_style mb-4 text-xl'>A passionate and driven student pursuing Bachelor's in Computer Application(BCA). With a Keen interest in technology and innovation . I've developed skills in frontend web development , specializing in crafting visually stunning and user-friendly interfaces.
            I'm excited to collaborate on projects, learn from others, and grow as a developer.Let's connect!
          </p>
        </div>
      
      </div>
    
    </>
  )
}

export default About