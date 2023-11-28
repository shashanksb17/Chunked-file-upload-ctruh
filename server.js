const express = require('express');
const multer = require('multer');
const path = require('path');
const fileController = require('./controllers/fileController');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Multer configuration
const storage = multer.memoryStorage(); // Use memory storage for handling large files
const upload = multer({ storage: storage });

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file upload
app.post('/upload', upload.single('file'), fileController.uploadFile);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
