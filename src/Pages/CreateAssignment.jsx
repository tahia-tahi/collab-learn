import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePicker.css";
import { toast } from "react-toastify";

const CreateAssignment = () => {


    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const assignmentData = Object.fromEntries(formData.entries())
        console.log(assignmentData);

        fetch('http://localhost:3000/assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentData)

        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    console.log(data);
                    toast.success('Assignment added successfully')
                }

            })
    }

    return (
        <div className="max-w-xl mx-auto p-4 bg-white shadow rounded">
            <h2 className="text-2xl font-semibold mb-4">Create Assignment</h2>



            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"

                    placeholder="Assignment Title"
                    className="w-full border p-2 rounded"
                    required
                />

                <textarea
                    name="description"
                    placeholder="Assignment Description"
                    className="w-full border p-2 rounded"
                    required
                />

                <input
                    type="number"
                    name="marks"
                    placeholder="Marks"
                    className="w-full border p-2 rounded"
                    required
                />

                <input
                    type="text"
                    name="thumbnail"
                    placeholder="Thumbnail Image URL"
                    className="w-full border p-2 rounded"
                    required
                />

                <select
                    name="difficulty"
                    className="w-full border p-2 rounded"
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <div>
                    <label className="block mb-1 font-medium">Due Date</label>
                    <DatePicker
                        className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        calendarClassName="custom-calendar"
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select Due Date"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                    Create Assignment
                </button>
            </form>
        </div>
    );
};

export default CreateAssignment;