import { useLoaderData, useNavigate } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  const [formData, setFormData] = useState(assignment);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/assignments/${assignment._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Updated!", "Assignment has been updated.", "success");
          navigate("/assignments");
        } else {
          Swal.fire("No Change", "No updates were made.", "info");
        }
      })
      .catch(() => {
        Swal.fire("Error", "Something went wrong.", "error");
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 my-20 bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8 text-secondary">
        Update Assignment
      </h2>

      <form onSubmit={handleUpdate} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-secondary"
            rows="4"
            minLength={30}
            required
          ></textarea>
        </div>

        {/* Marks */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Marks
          </label>
          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Thumbnail URL
          </label>
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>

        {/* Difficulty */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Difficulty
          </label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Due Date */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-[#350f7f] transition duration-300"
          >
            Update Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAssignment;
