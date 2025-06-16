import { useLoaderData, useNavigate } from "react-router";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthContext";

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  const [formData, setFormData] = useState(assignment);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e, id, creatorEmail) => {
    e.preventDefault();

    const userEmail = user?.email;
    if (userEmail !== creatorEmail) {
      Swal.fire("Unauthorized", "You are not authorized to update this assignment.", "error");
      return;
    }
    navigate(`/update/${id}`);


    fetch(`https://collab-learn-server-pearl.vercel.app/assignments/${assignment._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update response:", data);
        if (data.modifiedCount ) {
          Swal.fire("Updated!", "Assignment has been updated.", "success");
          navigate("/assignments");
        } else {
          Swal.fire("No Change", "No updates were made.", "info");
        }
      })
      .catch((err) => {
        console.error("Update error:", err);
        Swal.fire("Error", "Something went wrong.", "error");
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded my-20">
      <h2 className="text-2xl font-semibold mb-4">Update Assignment</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="3"
            minLength={30}
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Marks</label>
          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Difficulty</label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Update Assignment
        </button>
      </form>
    </div>
  );
};

export default UpdateAssignment;
