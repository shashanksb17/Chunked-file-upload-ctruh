const fs = require('fs');
const path = require('path');

const CHUNK_SIZE = 1024 * 1024; // 1 MB

const chunkedUpload = (req, res, next) => {
  const file = req.file;
  const chunks = [];
  let offset = 0;

  req.on('data', (chunk) => {
    chunks.push(chunk);
    offset += chunk.length;

    if (offset >= CHUNK_SIZE) {
      const buffer = Buffer.concat(chunks, offset);
      file.buffer = buffer;
      chunks.length = 0;
      offset = 0;
    }
  });

  req.on('end', () => {
    if (chunks.length > 0) {
      const buffer = Buffer.concat(chunks, offset);
      file.buffer = buffer;
    }

    next();
  });
};

module.exports = chunkedUpload;
