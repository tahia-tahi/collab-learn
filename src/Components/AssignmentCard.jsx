import { Link } from "react-router";
import { MdOutlineEditNote } from "react-icons/md";
import { IoMdEye } from "react-icons/io";



const AssignmentCard = ({ assignment, onDelete }) => {





  return (
    <div className="bg-base-100 shadow-lg rounded-lg p-4 flex flex-col items-start space-y-3 border hover:shadow-xl transition duration-300">
      <img
        src={assignment.thumbnail}
        alt={assignment.title}
        className="w-full h-48 object-cover rounded-md mb-2"
      />

      <h2 className="text-xl font-semibold text-secondary">{assignment.title}</h2>

      <div className="text-sm text-gray-600">
        <p><span className="font-medium">Marks:</span> {assignment.marks}</p>
        <p><span className="font-medium">Difficulty:</span> <span className="capitalize">{assignment.difficulty}</span></p>
        <p><span className="font-medium">Due Date:</span> {assignment.dueDate}</p>
      </div>

      <div className="flex justify-between items-center w-full pt-4">
        <button
          onClick={() => onDelete(assignment._id)}
          className="btn btn-outline btn-error btn-sm"
        >
          Delete
        </button>

        <div className="flex flex-col-reverse gap-2.5 ">
        <Link to={`/details/${assignment._id}`} className="btn btn-primary btn-sm">
         <IoMdEye size={20}/>

        </Link>
        <Link to={`/update/${assignment._id}`} className="btn btn-primary btn-sm">
       <MdOutlineEditNote size={20} />

        </Link>



        </div>


      </div>
    </div>
  );
};

export default AssignmentCard;
