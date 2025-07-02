import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const CreateAssignment = () => {
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value.trim();
    const description = form.description.value.trim();
    const marks = form.marks.value.trim();
    const thumbnail = form.thumbnail.value.trim();
    const difficulty = form.difficulty.value;

    if (!title || !description || !marks || !thumbnail || !difficulty || !dueDate) {
      return toast.error("Please fill in all the fields");
    }

    if (description.length < 30) {
      return toast.error("Description should be at least 30 characters long.");
    }

    if (isNaN(marks) || marks <= 0) {
      return toast.error("Marks should be a valid number greater than 0.");
    }

    const assignmentData = {
      title,
      description,
      marks: Number(marks),
      thumbnail,
      difficulty,
      dueDate: dueDate.toISOString().split("T")[0],
    };

    fetch("http://localhost:3000/assignments", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Assignment added successfully");
          form.reset();
          setDueDate(null);
        } else {
          toast.error("Failed to create assignment");
        }
      })
      .catch(() => {
        toast.error("Server error. Please try again later.");
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg my-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-secondary">Create Assignment</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="Assignment Title"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          required
        />

        <textarea
          name="description"
          placeholder="Assignment Description (min 30 characters)"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
          rows={4}
          minLength={30}
          required
        />

        <input
          type="number"
          name="marks"
          placeholder="Marks"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          required
          min={1}
        />

        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail Image URL"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          required
        />

        <select
          name="difficulty"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          defaultValue=""
          required
        >
          <option value="" >
            Select Difficulty
          </option>
          <option  value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Due Date</label>
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            calendarClassName="custom-calendar"
            dateFormat="yyyy-MM-dd"
            placeholderText="Select Due Date"
            minDate={new Date()}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-secondary hover:bg-primary transition text-white font-semibold py-3 rounded-lg"
        >
          Create Assignment
        </button>
      </form>
    </div>
  );
};

export default CreateAssignment;
