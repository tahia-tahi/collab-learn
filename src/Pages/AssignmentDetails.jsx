import { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const AssignmentDetails = () => {


  const { user } = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false)

  const details = useLoaderData();

  const handleTakeAssignment = () => {
    setShowModal(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form)
    const linkInput = formData.get('link')
    const linkNote = formData.get('note')

    const submissionData = {
      assignmentId: details._id,
      studentEmail: user?.email,
      googleDocsLink: linkInput,
      quickNote: linkNote
    };

    console.log(submissionData);

    try {
      const res = await fetch(`http://localhost:3000/submission`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(submissionData)
      })
      const data = await res.json();

      if (data.insertedId) {
        toast.success('Successfully Submitted')
        setShowModal(false)

      } else {
        toast.error("Failed to submit assignment.");
      }

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }

  }

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-base-100 shadow rounded-lg">
      <h1 className="text-3xl font-bold text-secondary mb-4 text-center">
        {details.title}
      </h1>

      <img
        src={details.thumbnail}
        alt={details.title}
        className="w-full h-64 object-cover rounded mb-6"
      />

      <p className="text-lg text-gray-700 mb-4">
        <span className="font-semibold text-secondary">Description:</span>{" "}
        {details.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
        <div className="p-4 bg-primary text-white rounded shadow">
          <p className="text-sm">Marks</p>
          <h3 className="text-xl font-bold">{details.marks}</h3>
        </div>
        <div className="p-4 bg-secondary text-white rounded shadow">
          <p className="text-sm">Difficulty</p>
          <h3 className="text-xl font-bold capitalize">{details.difficulty}</h3>
        </div>
        <div className="p-4 bg-accent text-white rounded shadow">
          <p className="text-sm">Due Date</p>
          <h3 className="text-xl font-bold">{details.dueDate}</h3>
        </div>
      </div>

      <div className="text-center">
        <button onClick={handleTakeAssignment} className="btn btn-primary px-6 text-white">
          Take Assignment
        </button>



        {showModal && (
          <div className="fixed inset-0 bg-base- bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-xl w-full max-w-md">
              <h3 className="text-xl font-semibold mb-2">Submit Your Assignment</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Google Docs Link"
                  name="link"
                  className="input input-bordered w-full mb-3"
                  required
                />
                <textarea
                  placeholder="Quick Note"
                  name="note"
                  className="textarea textarea-bordered w-full mb-3"
                ></textarea>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default AssignmentDetails;
