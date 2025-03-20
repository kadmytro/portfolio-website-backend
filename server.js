require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL;

const corsOptions = {
  origin: FRONTEND_URL,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Serve JSON data
app.get('/api/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});

// Serve image
app.get('/api/photo', (req, res) => {
  res.sendFile(path.join(__dirname, 'uploads', 'profile.jpg'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
