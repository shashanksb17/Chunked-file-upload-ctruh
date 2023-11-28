const fileService = require('../services/fileService');

const uploadFile = (req, res) => {
  const file = req.file;

  if (file) {
    const filePath = fileService.saveFile(file);
    res.json({ message: 'File uploaded successfully.', filePath });
  } else {
    res.status(400).json({ error: 'No file selected.' });
  }
};

module.exports = {
  uploadFile,
};
