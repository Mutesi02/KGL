const express = require('express');
const router = express.Router();

// GET /contacts - Render the contact page
router.get('/contacts', (req, res) => {
  res.render('contacts'); // views/contacts.pug should exist
});

// POST /contacts - Handle form submissions
router.post('/contacts', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, msg: 'All fields are required.' });
  }

  console.log('New Contact Message:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  res.json({ success: true, msg: 'Thank you for contacting us. We will respond shortly!' });
});

module.exports = router;
