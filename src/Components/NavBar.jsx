import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import './NavBar.css';
function NavBar() {
  return (
   <>
    <div className='flex text-black p-6 md:p-10 w-screen sticky z-50 bg-white'>
    <section className='flex justify-between w-full lg:w-1/2'>
      <div className="flex justify-start items-center">
      <div className=' bg-blue-600 mr-2 hidden md:w-5 md:h-5 md:block'></div>
      <span className='font-bold text-xl mr-1 md:text-4xl text-nowrap'>Shlok Maurya<span className='m-0.5'>/</span></span>
      <span className='cursive-style font-thin align-bottom text-xs md:text-xl text-nowrap  text-blue-500 '>Frontend Web Developer</span>
      </div>
      <div className="lg:hidden">
    <SideBar/>
    </div>
    </section>
    <section className='hidden w-1/2 lg:block'>
      <ul className='flex justify-around'> 
        <Link to='/'><li className="hover:border-b-2 hover:border-blue-600">ABOUT ME</li></Link>
        <Link to='/Resume'><li className="hover:border-b-2 hover:border-blue-600">RESUME</li> </Link>
        <Link to='/Projects'><li className="hover:border-b-2 hover:border-blue-600">PROJECTS</li></Link>
        <Link to='Contact'><li className="hover:border-b-2 hover:border-blue-600">CONTACT</li></Link>
      </ul>
    </section>
   </div> 
   </>
  )
}
export default NavBar
