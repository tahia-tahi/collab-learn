import { FaUserPlus, FaTasks, FaEdit, FaClipboardCheck, FaCheckCircle } from "react-icons/fa";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: <FaUserPlus className="text-4xl text-secondary mb-4" />,
    title: "User Registration & Login",
    description:
      "Sign up or log in using your email and password. You can also log in with Google. Once logged in, you’re automatically friends with all users!",
    bg: "bg-primary",
  },
  {
    icon: <MdOutlineAssignmentInd className="text-4xl text-secondary mb-4" />,
    title: "Create Assignments",
    description:
      "Logged-in users can create assignments for everyone. Add a title, description, difficulty, marks, due date, and thumbnail. It's quick and simple!",
    bg: "bg-white",
  },
  {
    icon: <FaTasks className="text-4xl text-secondary mb-4" />,
    title: "View & Take Assignments",
    description:
      "View all available assignments. Click on any assignment to see full details and submit your work through a Google Docs link and notes.",
    bg: "bg-primary",
  },
  {
    icon: <FaClipboardCheck className="text-4xl text-secondary mb-4" />,
    title: "Pending Assignments",
    description:
      "See all assignments submitted by other users that are waiting to be marked. Only others' submissions are visible to ensure fairness.",
    bg: "bg-white",
  },
  {
    icon: <FaEdit className="text-4xl text-secondary mb-4" />,
    title: "Evaluate & Give Marks",
    description:
      "Open the Google Docs submission, review the notes, and give marks with feedback. The submission will then be marked as completed.",
    bg: "bg-primary",
  },
  {
    icon: <FaCheckCircle className="text-4xl text-secondary mb-4" />,
    title: "Track Your Attempts",
    description:
      "Check your submitted assignments, view obtained marks and feedback. Always stay updated with your performance.",
    bg: "bg-white",
  },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // triggers when 20% of grid is visible
  });

  return (
    <section className="py-16 px-8 bg-base-100 mt-20 text-base-content">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-secondary">
          Features of Our Platform
        </h2>

        {/* Attach ref to grid container */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map(({ icon, title, description, bg }, i) => (
            <motion.div
              key={title}
              className={`card shadow-md p-6 rounded-2xl hover:shadow-xl transition-all duration-300 ${bg}`}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              {icon}
              <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
              <p className="text-secondary">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
