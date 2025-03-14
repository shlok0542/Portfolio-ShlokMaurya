import React from 'react'
import {Download} from 'lucide-react'
import {GraduationCap} from 'lucide-react'
import {MapPinned} from 'lucide-react'
import { University } from 'lucide-react'
function Resume() {
  return (
    <>
    <div className='bg-orange-100 w-screen h-auto p-2 md:p-16'>
        <section className='flex-col mb-10'>
          <div className='flex justify-center items-center m-10'>
            <div className='w-3 h-3 bg-blue-600 mr-2 md:w-5 md:h-5'></div>
            <span className='font-bold text-xl mr-1 md:text-4xl text-nowrap'>Resume</span>
          </div>
          <div className='flex justify-end'>
           <button className='btn btn-primary transition-all ease-in-out hover:scale-105'>DOWNLOAD RESUME<Download /></button>
          </div>
        </section>
        <section className='flex-col justify-center items-center'>
          {/* Education  */}
          <div className='mb-10 flex w-full bg-white h-80 lg:w-screen/2 p-8 lg:p-12 rounded-xl'>
            <section className='w-full lg:w-1/2 h-full bg-gray-100 p-4 rounded-xl shadow-2xl hover:scale-105 transition-all ease-in-out'>
              <p className='text-blue-700 text-2xl lg:text-4xl mb-2 border-l-4 border-blue-700 pl-4'>Education  <span className='text-xl  mb-3'>2025-PRESENT</span></p>
              <p className='text-xl pl-5 mb-3 flex'><University  size={20} className='mr-2'/>JAGATPUR POST GRADUATE COLLEGE </p>
              <p className='text-sm pl-5 mb-3 flex'><GraduationCap size={18}className='mr-2' />BCA(Bachelor of Computer Application)</p>
              <p className='text-xs pl-5 mb-3 flex'><MapPinned size={15} className='mr-2' />Varanasi , Uttar Pradesh</p>
            </section>
            <section className='w-1/2 h-full hidden lg:block p-6'>
                <p className='text-center'>Currently pursuing my degree at "<a href='#' className='decoration-neutral-content text-blue-700 cursor-pointer'>Jagatpur P.G College</a>".I have developed a solid foundation in programming languages such as C,C++,Javascript.My coursework has also in database management ,Web Development , and Software Engineering.</p>      
            </section>
          </div>
          {/* Education - high school and Intermediate */}
          <div className='mb-10 flex w-full bg-white h-auto lg:w-screen/2 p-8 lg:p-12 rounded-xl'>
          {/* Intermediate */}
            <section className=' flex-col w-full h-auto lg:w-1/2  bg-gray-100 p-6 rounded-xl mr-4 shadow-2xl hover:scale-105 transition-all ease-in-out'>
              <p className='text-cyan-600 text-xl lg:text-2xl mb-2  pl-4'>Intermediate<span className='text-xl pl-4 mb-3'>2020-2022</span></p>
              <p className='text-sm pl-5 mb-3 flex'><University  size={20} className='mr-2'/>JAI PUBLIC SCHOOL</p>
              <p className='text-xs pl-5 mb-3 flex'><GraduationCap size={18}className='mr-2' />Passing with 65.6%</p>
              <p className='text-xs pl-5 mb-3 flex'><MapPinned size={15} className='mr-2' />Alauddinpur Korauta,Uttar Pradesh</p>
            <div className='lg:hidden'>
            <p className='text-cyan-600 text-xl mb-2  pl-4'>High School <span className='text-xl pl-4 mb-3'>2018-2020</span></p>
              <p className='text-xs pl-5 mb-3 flex'><University  size={20} className='mr-2'/>SILVER GROVE SCHOOL</p>
              <p className='text-xs pl-5 mb-3 flex'><GraduationCap size={18}className='mr-2' />Passing with 69.9%</p>
              <p className='text-xs pl-5 mb-3 flex'><MapPinned size={15} className='mr-2' />Lahartara Varanasi,Uttar Pradesh</p>
            </div>
            </section>
           
            {/*  High school */}
            <section className='w-1/2 h-full hidden lg:block ml-4  bg-gray-100 p-6 rounded-xl shadow-2xl hover:scale-105 transition-all ease-in-out'>
            <p className='text-cyan-600 text-xl lg:text-2xl mb-2  pl-4'>High School <span className='text-xl pl-4 mb-3'>2018-2020</span></p>
              <p className='text-xl pl-5 mb-3 flex'><University  size={20} className='mr-2'/>SILVER GROVE SCHOOL</p>
              <p className='text-sm pl-5 mb-3 flex'><GraduationCap size={18}className='mr-2' />Passing with 69.9%</p>
              <p className='text-xs pl-5 mb-3 flex'><MapPinned size={15} className='mr-2' />Lahartara Varanasi,Uttar Pradesh</p>
            </section>
          </div>
          {/*Professional Skillset */}
          <div className='mb-10 flex-col  bg-white h-auto w-full p-8 lg:p-12 rounded-xl'>
            <section className='w-full h-full '>
            <div>
            <p className='text-blue-700 text-2xl lg:text-4xl mb-2 border-l-4 border-blue-700 pl-4'>Professional Skillset</p>
            </div>
             <div className="grid grid-cols-2">
             <div className='flex justify-start items-center m-2 p-2 w-45 md:w-90 '>
            <div className='w-2 h-2 bg-blue-600 mr-2 md:w-3 md:h-3'></div>
            <span className='font-semiboldbold text-xs mr-1 md:text-2xl text-nowrap'>Web Development</span>
          </div>
          <div className='flex justify-start items-center m-2 p-2 w-45 md:w-90'>
            <div className='w-2 h-2 bg-blue-600 mr-2 md:w-3 md:h-3'></div>
            <span className='font-semiboldbold text-xs mr-1 md:text-2xl text-nowrap'>Database Management</span>
          </div>
          <div className='flex justify-start items-center m-2 p-2 w-45md:w-90'>
            <div className='w-2 h-2 bg-blue-600 mr-2 md:w-3 md:h-3'></div>
            <span className='font-semiboldbold text-xs mr-1 md:text-2xl text-nowrap'>Problem Solving</span>
          </div>
          <div className='flex justify-start items-center m-2 p-2 w-45 md:w-90'>
            <div className='w-2 h-2 bg-blue-600 mr-2 md:w-3 md:h-3'></div>
            <span className='font-semiboldbold text-xs mr-1 md:text-2xl text-nowrap'>Teamwork & Collaboration</span>
          </div>
              </div> 
            </section>
            <section className='w-full h-full mt-8 '>
            <div>
            <p className='text-blue-700 text-2xl lg:text-4xl mb-2 border-l-4 border-blue-700 pl-4'>Languages</p>
            </div>
             <div className="grid grid-cols-2 w-full/2">
             <div className='flex justify-start items-center m-2 p-2 w-45 md:w-90 '>
            <div className='w-2 h-2 bg-blue-600 mr-2 md:w-3 md:h-3'></div>
            <span className='font-semiboldbold text-xs mr-1 md:text-2xl text-nowrap'>Database Management</span>
          </div>
          <div className='flex justify-start items-center m-2 p-2 w-45 md:w-90'>
            <div className='w-2 h-2 bg-blue-600 mr-2 md:w-3 md:h-3'></div>
            <span className='font-semiboldbold text-xs mr-1 md:text-2xl text-nowrap'>Database Management</span>
          </div>
          </div>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}

export default Resume