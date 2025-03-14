import { useState } from "react";
import { Menu, X } from "lucide-react";
import {Link} from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false) }
        >
          <X size={24} />
        </button>
        <ul className="relative top-8">
        <Link to='/'><li className="p-4" onClick={() => setIsOpen(false) }>ABOUT ME</li></Link>
        <Link to='/Resume'><li className="p-4" onClick={() => setIsOpen(false) }>RESUME</li> </Link>
        <Link to='/Projects'><li className="p-4" onClick={() => setIsOpen(false) }>PROJECTS</li></Link>
        <Link to='Contact'><li className="p-4" onClick={() => setIsOpen(false) }>CONTACT</li></Link>
        </ul>
      </div>
      {/* Toggle Button */}
      <button
        className=" text-black p-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={32} />
      </button>
    </div>
  );
}
