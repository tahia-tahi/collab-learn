import logo from '../assets/collab-logo.png';
import { Link } from 'react-router'; 
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow-md px-4 py-3 md:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Collab Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-secondary">
          <Link to="/">Home</Link>
          <Link to="/assignments">Assignments</Link>
          {user && (
            <>
              <Link to="/pending">Pending</Link>
              <Link to="/create">Create</Link>
              <Link to="/submitted">Submitted</Link>
              <button className="btn btn-sm bg-primary text-white hover:bg-secondary">Log Out</button>
            </>
          )}
          {!user && (
            <>
              <Link to="/auth/login">Log In</Link>
              <Link to="/auth/signup">Sign Up</Link>
            </>
          )}
        </div>

        {/* Theme Toggle (Just UI - logic not added) */}
        <div className="hidden md:flex items-center space-x-3 text-secondary text-xl">
          <IoIosSunny className="cursor-pointer" />
          <FaMoon className="cursor-pointer" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-secondary focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 space-y-3 px-4 text-secondary font-medium">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/assignments" onClick={() => setIsMenuOpen(false)}>Assignments</Link>
          {user && (
            <>
              <Link to="/pending" onClick={() => setIsMenuOpen(false)}>Pending</Link>
              <Link to="/create" onClick={() => setIsMenuOpen(false)}>Create</Link>
              <Link to="/submitted" onClick={() => setIsMenuOpen(false)}>Submitted</Link>
              <button className="btn btn-sm w-full bg-primary text-white hover:bg-secondary">Log Out</button>
            </>
          )}
          {!user && (
            <>
              <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>Log In</Link>
              <Link to="/auth/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
            </>
          )}
          <div className="flex space-x-3 text-xl pt-2">
            <IoIosSunny className="cursor-pointer" />
            <FaMoon className="cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
