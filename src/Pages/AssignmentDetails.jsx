import { useLoaderData } from "react-router";

const AssignmentDetails = () => {
  const details = useLoaderData();

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
        <button className="btn btn-primary px-6 text-white">
          Take Assignment
        </button>
      </div>
    </div>
  );
};

export default AssignmentDetails;
