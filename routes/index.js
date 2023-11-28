const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fileController = require('../controllers/fileController');
const chunkedUpload = require('../utils/chunkedUpload');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

router.post('/upload', upload.single('file'), chunkedUpload, fileController.uploadFile);

module.exports = router;
