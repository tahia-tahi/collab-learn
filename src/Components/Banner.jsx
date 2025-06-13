import { Link } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative isolate overflow-hidden mx-auto">
      {/* soft gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-sky-50 to-white" />

      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col-reverse items-center gap-12 px-6 py-10 lg:flex-row lg:gap-20">
        {/* text area */}
        <motion.div
          className="max-w-lg text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-primary md:text-5xl">
            Group-study, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              smarter&nbsp;together
            </span>
            <span> 🚀</span>
          </h1>

          <p className="mb-8 text-base text-gray-600 md:text-lg">
            Create, submit &amp; grade assignments with friends — all in one
            place. Experience the modern way of collaborative learning!
          </p>

          <Link to="/auth/signup">
            <button className="btn btn-primary btn-wide shadow-lg hover:shadow-xl transition">
              Get&nbsp;Started
            </button>
          </Link>
        </motion.div>

        {/* imagery */}
        <div className="grid w-full max-w-md grid-cols-2 gap-4 mx-auto">
          {[
            { src: "https://i.ibb.co/rRQYDD2x/9.png", delay: 0 },
            { src: "https://i.ibb.co/N2Q5vRyy/10.png", delay: 0.15 },
            {
              src: "https://i.ibb.co/jP2KdLCY/11.png",
              delay: 0.3,
              span: true,
            },
          ].map(({ src, delay, span }) => (
            <motion.img
              key={src}
              src={src}
              alt="students"
              className={`rounded-xl object-cover shadow-md ${
                span ? "col-span-2" : ""
              } hover:-translate-y-1.5 transition`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
