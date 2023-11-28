const fs = require('fs').promises;
const path = require('path');

const saveFile = async (file) => {
  const filePath = path.join(__dirname, '..', 'uploads', file.originalname);

  const fileHandle = await fs.open(filePath, 'w');

  const writableStream = fileHandle.createWriteStream();

  writableStream.write(file.buffer);

  writableStream.end();

  await fileHandle.close();

  return filePath;
};

module.exports = {
  saveFile,
};
