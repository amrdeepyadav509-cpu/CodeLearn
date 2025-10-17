const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Feedback = require('../models/Feedback');

// 🟢 Submit feedback
router.post('/', auth, async (req, res) => {
  try {
    const { name, message, rating } = req.body;

    if (!message) return res.status(400).json({ error: 'Message is required' });
    if (!rating) return res.status(400).json({ error: 'Rating is required' });

    const fb = new Feedback({
      user: req.user._id,
      name: name?.trim() || undefined, // optional input name
      message,
      rating,
    });

    await fb.save();

    // populate user info for frontend
    await fb.populate('user', 'name emailOrPhone photoUrl');

    res.json(fb);
  } catch (err) {
    console.error('Error submitting feedback:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// 🟢 Get all feedbacks
router.get('/', auth, async (req, res) => {
  try {
    const feedbacks = await Feedback.find()
      .populate('user', 'name emailOrPhone photoUrl')
      .sort({ createdAt: -1 });

    res.json(feedbacks);
  } catch (err) {
    console.error('Error fetching feedbacks:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
