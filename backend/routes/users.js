const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const User = require('../models/User');
const multer = require('multer');

// multer for profile update
const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, 'uploads/'); },
  filename: function (req, file, cb) { cb(null, Date.now() + '-' + file.originalname); }
});
const upload = multer({ storage });

router.get('/me', auth, async (req, res) => {
  res.json(req.user);
});

router.put('/me', auth, upload.single('photo'), async (req, res) => {
  try {
    const { name, emailOrPhone } = req.body;
    const update = { name, emailOrPhone };
    if (req.file) update.photoUrl = `/uploads/${req.file.filename}`;
    const user = await User.findByIdAndUpdate(req.user._id, update, { new: true }).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
