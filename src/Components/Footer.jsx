import { Link } from 'react-router';
import logo from '../assets/collab-logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-base-100 pt-10 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10" />
          </div>
          <p className="text-sm text-base-content">
            Empowering collaboration through smart assignments and real-time submissions.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-primary">Quick Links</h3>
          <ul className="space-y-2 text-base-content">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/assignments" className="hover:text-primary">Assignments</Link></li>
            <li><Link to="/create" className="hover:text-primary">Create Assignment</Link></li>
            <li><Link to="/auth/login" className="hover:text-primary">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-primary">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-base-content">
            <a href="#" className="hover:text-primary"><FaFacebookF /></a>
            <a href="#" className="hover:text-primary"><FaTwitter /></a>
            <a href="#" className="hover:text-primary"><FaInstagram /></a>
            <a href="#" className="hover:text-primary"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>


      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-base-content">
        &copy; {new Date().getFullYear()} Collab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
