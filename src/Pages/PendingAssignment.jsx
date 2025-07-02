import { useEffect, useState } from 'react';
import MarkModal from './MarkModal';
import { toast } from 'react-toastify';

const PendingAssignment = ({ userEmail }) => {
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const fetchPendingAssignments = async () => {
    const res = await fetch(`http://localhost:3000/submissions/pending?userEmail=${userEmail}`);
    const data = await res.json();
    const filtered = data.filter((item) => item.studentEmail !== userEmail);
    setPendingAssignments(filtered);
  };

  useEffect(() => {
    fetchPendingAssignments();
  }, [userEmail]);

  const handleGiveMarkClick = (submission) => {
    if (submission.studentEmail === userEmail) {
      toast.error("You can't evaluate your own submission.");
      return;
    }
    setSelectedSubmission(submission);
  };

  const handleCloseModal = () => {
    setSelectedSubmission(null);
  };

  const handleMarkSubmitted = () => {
    fetchPendingAssignments();
    setSelectedSubmission(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 my-20">
      <h2 className="text-3xl font-bold mb-8 text-secondary text-center">Pending Submissions</h2>

      {pendingAssignments.length === 0 ? (
        <p className="text-gray-500 text-center text-lg mt-16">
          No pending submissions found 🎉
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow border border-gray-200 bg-white">
          <table className="min-w-full table-auto">
            <thead className="bg-primary text-gray-800 uppercase text-sm tracking-wider">
              <tr>
                <th className="text-left px-6 py-4">Assignment Title</th>
                <th className="text-left px-6 py-4">Marks</th>
                <th className="text-left px-6 py-4">Examinee</th>
                <th className="text-center px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingAssignments.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {item.assignmentTitle}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.assignmentMarks}</td>
                  <td className="px-6 py-4 text-gray-600">{item.studentEmail}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleGiveMarkClick(item)}
                      className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded-md transition duration-300"
                    >
                      Give Mark
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedSubmission && (
        <MarkModal
          submission={selectedSubmission}
          onClose={handleCloseModal}
          onMarkSubmitted={handleMarkSubmitted}
          userEmail={userEmail}
        />
      )}
    </div>
  );
};

export default PendingAssignment;
