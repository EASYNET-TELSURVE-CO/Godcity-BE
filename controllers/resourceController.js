const axios = require('axios');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config();

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

exports.uploadDocument = async (req, res) => {
  const file = req.file; // Assuming multer middleware is used
  const { originalname, path } = file;

  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendDocument`;

  try {
    const formData = new FormData();
    formData.append('chat_id', process.env.TELEGRAM_CHAT_ID);
    formData.append('document', fs.createReadStream(path), originalname);

    const response = await axios.post(url, formData, {
      headers: formData.getHeaders(),
    });

    // Remove the temporary file
    fs.unlinkSync(path);

    res.json({ message: 'File uploaded successfully', fileUrl: `https://t.me/${process.env.TELEGRAM_CHAT_ID}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Other resource management operations (e.g., listing documents, deleting documents) can be added here
