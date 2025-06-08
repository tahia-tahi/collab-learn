import { useEffect, useState } from 'react';

const PendingAssignment = ({ userEmail }) => {
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const fetchPendingAssignments = async () => {
    const res = await fetch(`/submissions/pending?userEmail=${userEmail}`);
    const data = await res.json();
    setPendingAssignments(data);
  };

  useEffect(() => {
    fetchPendingAssignments();
  }, []);

  const handleGiveMarkClick = (submission) => {
    setSelectedSubmission(submission);
  };

  const handleCloseModal = () => {
    setSelectedSubmission(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Pending Submissions</h2>

      {pendingAssignments.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">No pending submissions found 🎉</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3 font-semibold text-sm text-gray-600">Assignment Title</th>
                <th className="text-left px-6 py-3 font-semibold text-sm text-gray-600">Marks</th>
                <th className="text-left px-6 py-3 font-semibold text-sm text-gray-600">Examinee</th>
                <th className="text-center px-6 py-3 font-semibold text-sm text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingAssignments.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{item.assignmentTitle}</td>
                  <td className="px-6 py-4">{item.assignmentMarks}</td>
                  <td className="px-6 py-4">{item.studentEmail}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleGiveMarkClick(item)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
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
          onMarkSubmitted={fetchPendingAssignments}
          userEmail={userEmail}
        />
      )}
    </div>
  );
};

export default PendingAssignment;
