import { Link } from "react-router";
import { MdDelete, MdEditNote } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

const AssignmentCard = ({ assignment, onDelete }) => {
  return (
    <div className="bg-white relative shadow-md rounded-lg p-3 flex flex-col space-y-4 border border-gray-200 hover:shadow-xl transition duration-300">
      {/* Image with animation */}
      <div className="overflow-hidden rounded-md mb-3">
        <img
          src={assignment.thumbnail}
          alt={assignment.title}
          className="w-full h-30 object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Title */}
      <h2 className="absolute top-[98px] right-3  text-[12px] bg-primary p-2 rounded font-semibold text-secondary">
        {assignment.title}
      </h2>

      {/* Details */}
      <div className="text-secondary text-[14px] space-y-1">
        <p>
          <span className="font-semibold">Marks:</span> {assignment.marks}
        </p>
        <p>
          <span className="font-semibold">Difficulty:</span>{" "}
          <span className="capitalize">{assignment.difficulty}</span>
        </p>
        <p>
          <span className="font-semibold">Due Date:</span> {assignment.dueDate}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center  border-t border-gray-200">
        {/* Delete Icon Button */}
        <button
          onClick={() => onDelete(assignment._id)}
          className="text-error hover:text-white hover:bg-error p-2 rounded-full transition duration-300"
          title="Delete Assignment"
        >
          <MdDelete size={22} />
        </button>

        {/* Action Icons */}
        <div className="flex gap-4">
          <Link
            to={`/details/${assignment._id}`}
            title="View Assignment"
            className="text-secondary hover:text-primary-focus p-2 rounded-full transition duration-300 hover:bg-base-200"
          > View
          </Link>
          <Link
            to={`/update/${assignment._id}`}
            title="Edit Assignment"
            className="text-secondary hover:text-primary-focus p-2 rounded-full transition duration-300 hover:bg-base-200"
          > Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
