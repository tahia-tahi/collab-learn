import { Link } from 'react-router';
import logo from '../assets/collab-logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-secondary text-base-100 pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 ">
            <img  src={logo} alt="Collab Logo" className="h-10 bg-primary p-1 rounded-xl " />
          </div>
          <p className="text-sm text-white leading-relaxed">
            Empowering collaboration through smart assignments and real-time submissions.
          </p>
        </div>

        {/* Quick Links */}
        <div className='text-white'>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/assignments" className="hover:text-primary transition-colors duration-200">Assignments</Link>
            </li>
            <li>
              <Link to="/create" className="hover:text-primary transition-colors duration-200">Create Assignment</Link>
            </li>
            <li>
              <Link to="/auth/login" className="hover:text-primary transition-colors duration-200">Login</Link>
            </li>
          </ul>
        </div>


         {/* Contact Info */}
        <div className='text-white'>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <MdEmail size={18} /> support@collab.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone size={18} /> +880 1234-567890
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn size={18} /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className='text-white'>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-primary transition"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary transition"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary transition"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary transition"><FaLinkedinIn /></a>
          </div>
        </div>

       
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-xs text-white">
        &copy; {new Date().getFullYear()} Collab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
