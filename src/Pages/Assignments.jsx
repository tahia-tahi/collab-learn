import { useLoaderData } from "react-router";
import { useState } from "react";
import AssignmentCard from "./../Components/AssignmentCard";
import Swal from "sweetalert2";

const Assignments = () => {
  const loadedAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(loadedAssignments);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/assignments/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Assignment has been deleted.", "success");
              const remaining = assignments.filter(a => a._id !== _id);
              setAssignments(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {assignments.map((assignment) => (
        <AssignmentCard
          key={assignment._id}
          assignment={assignment}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Assignments;
