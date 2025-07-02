import { FaQuestionCircle } from "react-icons/fa";

const Faq = () => {
    return (
        <section className="py-16 px-8 bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary mb-10 flex items-center justify-center gap-2">
          <FaQuestionCircle className="text-4xl " />
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <div className="collapse collapse-arrow bg-base-100 rounded-box shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How can I create an assignment?
            </div>
            <div className="collapse-content">
              <p>Log in first. Then go to the “Create Assignment” page, fill in the form with the title, description, marks, difficulty level, thumbnail, and due date. Click submit and you're done!</p>
            </div>
          </div>

         
          <div className="collapse collapse-arrow bg-base-100 rounded-box shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Who can view or take my assignments?
            </div>
            <div className="collapse-content">
              <p>All logged-in users can view and take any assignment. It's a shared group-study platform, so everyone can collaborate and learn together!</p>
            </div>
          </div>


          <div className="collapse collapse-arrow bg-base-100 rounded-box shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How do I submit an assignment?
            </div>
            <div className="collapse-content">
              <p>Click the "View Assignment" button, then click "Take Assignment." Submit your Google Docs link and add a quick note. It will be saved as a pending submission.</p>
            </div>
          </div>


          <div className="collapse collapse-arrow bg-base-100 rounded-box shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Can I evaluate my own assignment?
            </div>
            <div className="collapse-content">
              <p>No. The system does not allow users to mark or give feedback on their own submissions. You can only evaluate your friends’ pending submissions.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 rounded-box shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              What happens after I give marks to a submission?
            </div>
            <div className="collapse-content">
              <p>Once marks and feedback are submitted, the assignment's status is updated to "Completed." The examinee can then view the feedback in the "My Assignments" section.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 rounded-box shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              What if I forget my password?
            </div>
            <div className="collapse-content">
              <p>On the login page, click “Forgot password?” Enter your email, and you’ll receive a password reset link in your inbox.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Faq;