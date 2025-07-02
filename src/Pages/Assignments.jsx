import { useLoaderData, useNavigate } from "react-router";
import { useContext, useState } from "react";
import AssignmentCard from "./../Components/AssignmentCard";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const Assignments = () => {
  const loadedAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(loadedAssignments);
  const [filter, setFilter] = useState("all");
  const { user } = useContext(AuthContext);

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
      confirmButtonColor: "var(--color-primary)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/assignments/${_id}`, {
          method: "DELETE",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Assignment has been deleted.", "success");
              const remaining = assignments.filter((a) => a._id !== _id);
              setAssignments(remaining);
              navigate("/assignments");
            }
          });
      }
    });
  };

  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setFilter(selected);

    let url = "http://localhost:3000/assignments";
    if (selected !== "all") {
      url += `?difficulty=${selected}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  };

  return (
    <div
      className="px-10 my-20 max-w-7xl mx-auto"
      style={{ backgroundColor: "var(--color-base-100)", color: "var(--color-text)" }}
    >
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2
          className="text-3xl font-semibold"
          style={{ color: "var(--color-secondary)" }}
        >
          Assignments
        </h2>

        <select
          value={filter}
          onChange={handleFilterChange}
          className="border-primary border-2 rounded-md px-4 py-2 outline-none cursor-pointer"
          style={{
            borderColor: "var(--color-secondary)",
            backgroundColor: "white",
            color: "var(--color-text)",
          }}
        >
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence>
          {assignments.length > 0 ? (
            assignments.map((assignment) => (
              <motion.div
                key={assignment._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <AssignmentCard
                  assignment={assignment}
                  onDelete={() => handleDelete(assignment._id, assignment.creatorEmail)}
                  onUpdate={() => handleUpdate(assignment._id, assignment.creatorEmail)}
                />
              </motion.div>
            ))
          ) : (
            <p
              className="col-span-full text-center text-gray-500 text-lg"
              style={{ color: "var(--color-accent)" }}
            >
              No assignments found.
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Assignments;
