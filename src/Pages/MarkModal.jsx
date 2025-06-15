import { useState } from 'react';
import { toast } from 'react-toastify';

const MarkModal = ({ submission, onClose, onMarkSubmitted, userEmail }) => {
  const [marks, setMarks] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://collab-learn-server-pearl.vercel.app/submissions/mark', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        submissionId: submission._id,
        obtainedMarks: Number(marks),
        feedback,
        examinerEmail: userEmail,
      }),
    });

    if (res.ok) {
    toast.success('Marked successfully');
      onMarkSubmitted();
    } else {
      const error = await res.json();
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Mark Assignment</h2>
        <p>
          <strong>Google Docs Link:</strong>{' '}
          <a
            href={submission.googleDocsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Open Document
          </a>
        </p>
        <p className="mt-2">
          <strong>Notes:</strong> {submission.quickNote || 'No notes'}
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            placeholder="Marks"
            min={0}
            max={submission.assignmentMarks}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Feedback"
            required
            className="w-full border px-3 py-2 rounded"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarkModal;
