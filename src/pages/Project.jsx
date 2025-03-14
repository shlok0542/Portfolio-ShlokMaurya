import React from 'react'
import './Project.css'
function Project() {
  return (
    <>
      <div className='bg-orange-100 w-screen h-auto p-2 md:p-16'>
        <section className='flex-col'>
          <div className='flex justify-center items-center m-10'>
            <div className='w-3 h-3 bg-blue-600 mr-2 md:w-5 md:h-5'></div>
            <span className='font-bold text-xl mr-1 md:text-4xl text-nowrap'>Project</span>
          </div>
          <div className='CursiveFontSytle mb-10'>
            <p className='text-center text-xl text-gray-500 p-6'>
              Welcome to my collection of projects! Each project showcases my skills in software development, problem-solving, and user-centric design. From frontend development to AI-powered applications, I strive to build efficient, scalable, and innovative solutions.

              Below, you’ll find a variety of projects that highlight my expertise in React.js, C++, Python, and modern web technologies. Whether it’s an interactive web app, a data-driven backend, or an AI-integrated tool, every project reflects my passion for coding and continuous learning.

              Feel free to explore my work, and if you have any questions or collaboration opportunities, don’t hesitate to reach out!
            </p>
          </div>
        </section>
        <section className='flex-col justify-center items-center'>
          {/* project 1 */}
          <div className='mb-10 flex w-full bg-white h-80 lg:w-screen/2 p-8 lg:p-12 rounded-b-xs imag'>
            <section className='w-full lg:w-1/2 h-full bg-gray-100 '>
              <p className='text-blue-700 text-2xl lg:text-4xl mb-2 border-l-4 border-blue-700 pl-4'>AI ChatBot</p>
              <p className='CursiveFontSytle text-xs pl-6'>As FrontEnd Developer</p>
              <p className='text-xs p-4' >
                This AI-powered chatbot is designed to provide real-time responses using a REST API for fetching answers to user queries. Built with HTML, CSS, and JavaScript, it delivers an interactive and user-friendly experience while demonstrating seamless API integration.
              </p>
              <p className='text-xs p-4'><a href='https://shlok0542.github.io/chatbot/' className='text-blue-600'>Click here for Preview.</a></p>
            </section>
            <section className='   w-1/2 h-full hidden lg:block'>
            <div className='w-full h-full p-4 bg-[url(../../public/Logo1.png)] bg-cover bg-center rounded-2xl shadow-2xl hover:scale-105 transition-all ease-in-out'>

            </div>
            </section>
          </div>
          {/* project 2 */}
          <div className='mb-10 flex w-full bg-white h-80 lg:w-screen/2 p-8 lg:p-12 rounded-b-xs'>
            <section className='w-full lg:w-1/2 h-full bg-gray-100 '>
              <p className='text-blue-700 text-2xl lg:text-4xl mb-2 border-l-4 border-blue-700 pl-4'>Real Time Weather</p>
              <p className='CursiveFontSytle text-xs pl-6'>As FrontEnd Developer</p>
              <p className='text-xs p-4' >
                This Real-Time Weather Application allows users to get live weather updates for any city worldwide. Built using HTML, CSS, and JavaScript, it fetches data from a Weather API to display real-time temperature, humidity, wind speed, and more.
              </p>
              <p className='text-xs p-4'><a href='https://shlok0542.github.io/City_weather/' className='text-blue-600'>Click here for Preview.</a></p>
            </section>
            <section className='   w-1/2 h-full hidden lg:block'>
            <div className='w-full h-full p-4 bg-[url(../../public/Logo2.png)] bg-cover bg-center rounded-2xl shadow-2xl hover:scale-105 transition-all ease-in-out'>

            </div>
            </section>
          </div>
          {/* project 3 */}
          <div className='mb-10 flex w-full bg-white h-80 lg:w-screen/2 p-8 lg:p-12 rounded-b-xs'>
            <section className='w-full lg:w-1/2 h-full bg-gray-100 '>
              <p className='text-blue-700 text-2xl lg:text-4xl mb-2 border-l-4 border-blue-700 pl-4'>Portfolio</p>
              <p className='CursiveFontSytle text-xs pl-6'>As FrontEnd Developer</p>
              <p className='text-xs p-4' >
                Welcome to my personal portfolio, built using React.js and Tailwind CSS to ensure a sleek, fast, and fully responsive experience across all devices. This portfolio serves as a showcase of my projects, skills, and expertise in web development.
              </p>
              <p className='text-xs p-4'><a href='/' className='text-blue-600'>Click here for Preview.</a></p>
            </section>
            <section className='w-1/2 h-full hidden lg:block'>
            <div className='w-full h-full p-4 bg-[url(../../public/Logo3.png)] bg-cover bg-center rounded-2xl shadow-2xl hover:scale-105 transition-all ease-in-out'>

            </div>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}

export default Project