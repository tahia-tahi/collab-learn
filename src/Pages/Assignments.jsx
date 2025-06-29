import { useLoaderData, useNavigate } from "react-router";
import { useContext, useState } from "react";
import AssignmentCard from "./../Components/AssignmentCard";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthContext";

const Assignments = () => {
  const loadedAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(loadedAssignments);
  const [filter, setFilter] = useState("all");
  const { user } = useContext(AuthContext)




  const navigate = useNavigate();

 const handleUpdate = (id, creatorEmail) => {
  const userEmail = user?.email;

  if (userEmail !== creatorEmail) {
    Swal.fire("Unauthorized", "You are not authorized to update this assignment.", "error");
    return;
  }

  navigate(`/update/${id}`);
};




  const handleDelete = (_id, creatorEmail) => {
    const userEmail = user?.email; 

    if (userEmail !== creatorEmail) {
      Swal.fire("Unauthorized", "You are not authorized to delete this assignment.", "error");
      return;
    }

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
        fetch(`https://collab-learn-server-pearl.vercel.app/assignments/${_id}`, {
          method: "DELETE",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Assignment has been deleted.", "success");
              const remaining = assignments.filter((a) => a._id !== _id);
              setAssignments(remaining);
              navigate('/assignments')
            }
          });
      }
    });
  };


  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setFilter(selected);

    let url = "https://collab-learn-server-pearl.vercel.app/assignments";
    if (selected !== "all") {
      url += `?difficulty=${selected}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setAssignments(data));
  };

  return (
    <div className="p-4 my-20">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Assignments</h2>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="border px-3 py-1 rounded"
        >
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {assignments.length > 0 ? (
          assignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
              onDelete={() => handleDelete(assignment._id, assignment.creatorEmail)}
              onUpdate={() => handleUpdate(assignment._id, assignment.creatorEmail)}

            />
          ))
        ) : (
          <p className="text-gray-500 col-span-3 text-center">No assignments found.</p>
        )}
      </div>
    </div>
  );
};

export default Assignments;
