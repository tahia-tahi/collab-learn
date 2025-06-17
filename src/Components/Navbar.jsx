import logo from '../assets/collab-logo.png';
import { Link } from 'react-router';
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Log Out Successful');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <nav className="bg-base-100 shadow-md px-4 py-3 md:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Collab Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex items-center space-x-6 font-medium text-secondary">
          <Link to="/">Home</Link>
          <Link to="/assignments">Assignments</Link>

          {user && (
            <>
              <Link to="/pending">Pending</Link>

              {/* Profile Dropdown Toggle */}
              <div className="relative">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <img
                    src={user.photoURL || "https://i.ibb.co/8D0M3pM/default-avatar.png"}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm hidden md:inline-block group-hover:inline-block">
                    {user.displayName || "User"}
                  </span>
                </div>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50 text-sm text-gray-800">
                    <Link to="/create" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                      Create Assignment
                    </Link>
                    <Link to="/submitted" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                     Submitted Assignments
                    </Link>
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        handleLogOut();
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {!user && (
            <>
              <Link to="/auth/login">Log In</Link>
              <Link to="/auth/signup">Sign Up</Link>
            </>
          )}
        </div>

        {/* Theme Toggle */}
        <div className="hidden md:flex items-center space-x-3 text-secondary text-xl">
          <ThemeToggle />
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

              <div className="flex items-center gap-2 mt-2">
                <img
                  src={user.photoURL || "https://i.ibb.co/8D0M3pM/default-avatar.png"}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <span>{user.displayName || "User"}</span>
              </div>

              <button onClick={handleLogOut} className="btn btn-sm w-full bg-primary text-white hover:bg-secondary mt-2">
                Log Out
              </button>
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
