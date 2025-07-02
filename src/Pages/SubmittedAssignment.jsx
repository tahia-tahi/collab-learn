import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";

const SubmittedAssignment = () => {
  const { user } = useContext(AuthContext);
  const [mySubmissions, setMySubmissions] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-submissions/${user.email}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => setMySubmissions(data));
    }
  }, [user?.email]);

  return (
    <div className="max-w-6xl mx-auto my-16 px-6">
      <h2 className="text-3xl font-bold text-center text-secondary mb-8">
        My Submitted Assignments
      </h2>

      {mySubmissions.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="table w-full text-sm text-left bg-white border border-gray-200">
            <thead className="bg-secondary text-white text-sm">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Total Marks</th>
                <th className="px-4 py-3">Obtained</th>
                <th className="px-4 py-3">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {mySubmissions.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 font-medium">
                    {item.assignmentTitle || "N/A"}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Checked"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{item.totalMarks || "N/A"}</td>
                  <td className="px-4 py-3">
                    {item.obtainedMarks !== undefined
                      ? item.obtainedMarks
                      : "Pending"}
                  </td>
                  <td className="px-4 py-3 italic text-gray-600">
                    {item.feedback || "Not reviewed yet"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10 text-lg">
          You haven't submitted any assignments yet.
        </p>
      )}
    </div>
  );
};

export default SubmittedAssignment;
