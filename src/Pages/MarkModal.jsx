import { useState } from 'react';

const MarkModal = ({ submission, onClose, onMarkSubmitted, userEmail }) => {
  const [marks, setMarks] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/submissions/mark', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        submissionId: submission._id,
        obtainedMarks: marks,
        feedback,
        examinerEmail: userEmail
      }),
    });

    if (res.ok) {
      alert('Marked successfully');
      onMarkSubmitted();
      onClose();
    } else {
      const error = await res.json();
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Mark Assignment</h2>
        <p>
          <strong>Google Docs Link: </strong>
          <a href={submission.googleDocsLink} target="_blank" rel="noopener noreferrer">
            Open Document
          </a>
        </p>
        <p><strong>Notes:</strong> {submission.quickNote || 'No notes'}</p>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            placeholder="Marks"
            required
            min={0}
            max={submission.assignmentMarks}
          />
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Feedback"
            required
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default MarkModal;
