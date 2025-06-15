import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";


const SubmittedAssignment = () => {
  const { user } = useContext(AuthContext);
  const [mySubmissions, setMySubmissions] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://collab-learn-server-pearl.vercel.app/my-submissions/${user.email}`, {
        credentials: 'include'
      })

        .then((res) => res.json())
        .then((data) => setMySubmissions(data));
    }
  }, [user?.email]);

  return (
    <div className="max-w-6xl mx-auto my-10 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-primary">My Submitted Assignments</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Total Marks</th>
              <th>Obtained</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {mySubmissions.map((item, index) => (
              <tr key={index}>
                <td>{item.assignmentTitle || "N/A"}</td>
                <td>{item.status}</td>
                <td>{item.totalMarks || "N/A"}</td>
                <td>{item.obtainedMarks ?? "Pending"}</td>
                <td>{item.feedback || "Not reviewed yet"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {mySubmissions.length === 0 && (
          <p className="text-center text-gray-500 mt-4">You haven't submitted any assignments yet.</p>
        )}
      </div>
    </div>
  );
};

export default SubmittedAssignment;
