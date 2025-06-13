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
      <h2 className="text-2xl font-bold mb-4">Pending Submissions</h2>

      {pendingAssignments.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">No pending submissions found 🎉</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3">Assignment Title</th>
                <th className="text-left px-6 py-3">Marks</th>
                <th className="text-left px-6 py-3">Examinee</th>
                <th className="text-center px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingAssignments.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{item.assignmentTitle}</td>
                  <td className="px-6 py-4">{item.assignmentMarks}</td>
                  <td className="px-6 py-4">{item.studentEmail}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleGiveMarkClick(item)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
