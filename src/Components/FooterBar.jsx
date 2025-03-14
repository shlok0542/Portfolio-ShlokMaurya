import React from 'react'
import {Github, Twitter, Linkedin, Instagram} from 'lucide-react'

function FooterBar() {
  return (
    <>
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
      <Linkedin color="#0000ff" size={30} className='m-2 hover:text-blue-400' />
      </a>
      <a>
      <Twitter color="#0000ff" size={30} className='m-2 hover:text-blue-400' />
      </a>
      <a>
      <Instagram color="#0000ff" size={30} className='m-2 hover:text-blue-400'/>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - Powered by Shlok Maurya, All right Reverse</p>
  </aside>
</footer>
    </>
  )
}

export default FooterBar
