const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // In a real application, you would save this to a database or send an email.
  console.log('Received contact form submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

app.listen(port, () => {
  console.log(`Express API server running on http://localhost:${port}`);
});
