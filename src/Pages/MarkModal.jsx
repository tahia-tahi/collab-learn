import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthContext';

const MarkModal = ({ submission, onClose, onMarkSubmitted }) => {
  const [marks, setMarks] = useState('');
  const [feedback, setFeedback] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = user?.email;

    if (submission?.submitterEmail === userEmail) {
      toast.error("You can't mark your own submission.");
      return;
    }

    const res = await fetch('http://localhost:3000/submissions/mark', {
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
      toast.error('Error: ' + error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-white/30">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-xl relative animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-secondary text-center">Evaluate Submission</h2>

        <div className="mb-4 text-sm text-gray-700 space-y-2">
          <p>
            <span className="font-semibold">Google Docs:</span>{' '}
            <a
              href={submission.googleDocsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View Document
            </a>
          </p>
          <p>
            <span className="font-semibold">Student Notes:</span>{' '}
            <span className="italic">{submission.quickNote || 'No notes provided.'}</span>
          </p>
          <p>
            <span className="font-semibold">Total Marks:</span> {submission.assignmentMarks}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Obtained Marks
            </label>
            <input
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              placeholder={`0 - ${submission.assignmentMarks}`}
              min={0}
              max={submission.assignmentMarks}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Feedback
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write feedback..."
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg resize-none focus:ring-2 focus:ring-secondary focus:outline-none"
              rows="3"
            ></textarea>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-secondary text-white hover:bg-primary transition"
            >
              Submit Mark
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarkModal;
