import React, { useEffect, useState } from 'react';
import API from '../../api';
import './FeedbackPanel.css';

export default function FeedbackPanel() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [list, setList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // 🟢 Load all feedbacks
  const load = async () => {
    try {
      const res = await API.get('/feedback');
      setList(res.data);
    } catch (err) {
      console.error('Error loading feedbacks:', err);
    }
  };

  // ⏰ Show popup after 30 seconds (once per session)
  useEffect(() => {
    if (!sessionStorage.getItem('feedbackPopupShown')) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('feedbackPopupShown', 'true');
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => { load(); }, []);

  // ⭐ Submit feedback
  const send = async (e) => {
    e.preventDefault();
    if (!message.trim()) return alert('Please enter feedback!');
    if (rating === 0) return alert('Please select rating!');

    try {
      await API.post('/feedback', { name: name.trim() || undefined, message, rating });
      setMessage('');
      setName('');
      setRating(0);
      setShowPopup(false);
      load();
    } catch (err) {
      console.error('Error submitting feedback:', err);
    }
  };

  return (
    <div className='feed'>
      {/* 🟣 Popup */}
      {showPopup && (
        <div className="feedback-popup">
          <h3>Give Feedback</h3>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write feedback..."
          ></textarea>

          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'selected' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          <div className="popup-buttons">
            <button onClick={send}>Submit</button>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* 🟢 Feedback list */}
      <h2 style={{ paddingTop: 30 }}>All Feedbacks</h2>
      <div className="feedback-list">
        {list.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          list.map((fb) => (
            <div key={fb._id} className="feedback-card">
              <strong>{fb.name || fb.user?.name || 'Anonymous'}</strong>
              <div className="rating">
                {'★'.repeat(fb.rating)}{'☆'.repeat(5 - fb.rating)}
              </div>
              <div className="time">
                {new Date(fb.createdAt || fb.time).toLocaleString()}
              </div>
              <p>{fb.message || fb.feedback}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}


