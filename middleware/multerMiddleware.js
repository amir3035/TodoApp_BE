// middleware/multerMiddleware.js
const multer = require('multer');
const path = require('path');

const upload=multer({
     storage : multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
  }
})
}).single('image');
// Create the Multer instance
//const upload = multer({ storage: storage });

// Export the Multer middleware
module.exports = upload;
