import { Link } from "react-router";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";

const images = [
  "https://i.ibb.co/rRQYDD2x/9.png",
  "https://i.ibb.co/N2Q5vRyy/10.png",
  "https://i.ibb.co/jP2KdLCY/11.png",
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate overflow-hidden mx-auto min-h-[70vh]">
      {/* background image */}
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center transition-background duration-1000"
        style={{ backgroundImage: `url(${images[index]})` }}
      />

      {/* stronger overlay for darker background */}
      <div className="absolute inset-0 -z-5 bg-black/70" />

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 py-10 lg:flex-row lg:gap-20">
        {/* text */}
        <motion.div
          className="max-w-lg text-center text-white"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl">
            <motion.span
              className="bg-gradient-to-r from-blue-950 via-yellow-300 to-blue-900 bg-clip-text text-transparent bg-[length:200%_200%]"
              animate={{
                backgroundPositionX: ["0%", "100%", "0%"],
                backgroundPositionY: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Smarter Study Together
            </motion.span>
          </h1>

          <p className="mb-8 text-base md:text-lg">
            Create, submit &amp; grade assignments with friends — all in one
            place. Experience the modern way of collaborative learning!
          </p>

          <Link to={user ? "/assignments" : "/auth/signup"}>
  <button className="btn btn-primary px-6 py-2 text-white hover:bg-secondary transition"
>
    Get&nbsp;Started
  </button>
</Link>

        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
