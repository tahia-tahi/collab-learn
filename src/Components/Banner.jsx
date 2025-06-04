import { Link } from 'react-router';
import { motion } from 'framer-motion';


const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Right Side: Images */}
        <div className="grid grid-cols-2 gap-4">
          <motion.img 
            src="https://i.ibb.co/rRQYDD2x/9.png"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            alt="students-1"
          />
          <motion.img 
            src="https://i.ibb.co/N2Q5vRyy/10.png"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            alt="students-2"
          />
          <motion.img 
            src="https://i.ibb.co/jP2KdLCY/11.png"
            className="rounded-lg shadow-lg col-span-2 w-full h-auto object-cover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            alt="students-3"
          />
        </div>

        {/* Left Side: Text */}
        <div className="text-left max-w-lg">
          <h1 className="text-5xl font-bold text-primary mb-4">Group Study, Smarter Together 🚀</h1>
          <p className="py-4 text-base-content">
            Create, submit, and grade assignments with your friends — all in one place. Join the modern way of collaborative learning!
          </p>
          <Link to="/auth/signup">
            <button className="btn btn-primary btn-wide mt-4">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
