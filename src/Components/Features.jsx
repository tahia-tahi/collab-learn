import { FaUserPlus, FaTasks, FaEdit, FaClipboardCheck, FaCheckCircle } from "react-icons/fa";
import { MdOutlineAssignmentInd } from "react-icons/md";

const Features = () => {



    return (
        <section className="py-16 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">Features of Our Online Group-Study Platform</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="card shadow-md bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
            <FaUserPlus className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">User Registration & Login</h3>
            <p>Sign up or log in using your email and password. You can also log in with Google. Once logged in, you’re automatically friends with all users!</p>
          </div>

          {/* Feature 2 */}
          <div className="card shadow-md bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
            <MdOutlineAssignmentInd className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Create Assignments</h3>
            <p>Logged-in users can create assignments for everyone. Add a title, description, difficulty, marks, due date, and thumbnail. It's quick and simple!</p>
          </div>

          {/* Feature 3 */}
          <div className="card shadow-md bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
            <FaTasks className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">View & Take Assignments</h3>
            <p>View all available assignments. Click on any assignment to see full details and submit your work through a Google Docs link and notes.</p>
          </div>

          {/* Feature 4 */}
          <div className="card shadow-md bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
            <FaClipboardCheck className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pending Assignments</h3>
            <p>See all assignments submitted by other users that are waiting to be marked. Only others' submissions are visible to ensure fairness.</p>
          </div>

          {/* Feature 5 */}
          <div className="card shadow-md bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
            <FaEdit className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Evaluate & Give Marks</h3>
            <p>Open the Google Docs submission, review the notes, and give marks with feedback. The submission will then be marked as completed.</p>
          </div>

          {/* Feature 6 */}
          <div className="card shadow-md bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
            <FaCheckCircle className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Your Attempts</h3>
            <p>Check your submitted assignments, view obtained marks and feedback. Always stay updated with your performance.</p>
          </div>

        </div>

        {/* Usage Instructions */}
        <div className="mt-16 bg-accent rounded-xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">How to Use the Platform</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>📝 <strong>Register</strong> with email or log in with Google.</li>
            <li>➕ <strong>Create assignments</strong> from the “Create Assignment” page (must be logged in).</li>
            <li>📂 <strong>View assignments</strong> on the "Assignments" page. Click "View" to see full details.</li>
            <li>✅ <strong>Take the assignment</strong> by submitting a Google Docs link and a note.</li>
            <li>🎯 <strong>Evaluate friends’ submissions</strong> from the “Pending Assignments” page. Give marks and feedback.</li>
            <li>📊 <strong>Track your progress</strong> from the “My Attempted Assignments” section.</li>
          </ul>
        </div>
      </div>
    </section>
    );
};

export default Features;