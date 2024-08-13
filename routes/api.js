// routes/api.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const memberController = require('../controllers/memberController');
const eventController = require('../controllers/eventController');
const forumController = require('../controllers/forumController');
const resourceController = require('../controllers/resourceController');


// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/events');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  const upload = multer({ storage: storage });
  router.post('/events', eventController.upload.single('banner'), eventController.createEvent);
  router.get('/events', eventController.getAllEvents);
  router.get('/event/:id', eventController.getEventById);
  router.put('/update/event/:id', eventController.upload.single('banner'), eventController.updateEvent);
  router.delete('/delete/event/:id', eventController.deleteEvent);
  
  // Retrieve the banner image
  // router.get('/event/:id/banner', eventController.getEventBanner);

// Member routes
router.get('/members', memberController.getAllMembers);
router.post('/members', memberController.createMember);
router.put('/members/:id', memberController.updateMember);
router.delete('/members/:id', memberController.deleteMember);

// // Event routes
// router.get('/events', eventController.getAllEvents);
// router.post('/events', eventController.createEvent);
// router.put('/events/:id', eventController.updateEvent);
// router.delete('/events/:id', eventController.deleteEvent);

// Forum routes
router.get('/topics', forumController.getAllTopics);
router.post('/topics', forumController.createTopic);
router.get('/topics/:topicId/posts', forumController.getPostsForTopic);
router.post('/topics/:topicId/posts', forumController.createPost);

// Resource routes
// router.post('/resources/documents', resourceController.uploadDocument);
router.post('/resources/upload', resourceController.upload.single('file'), resourceController.uploadSermon);
router.get('/resources/all', resourceController.getAllSermons);
router.get('/resources/details/:id', resourceController.getSermonDetails);
router.delete('/resources/delete/:id', resourceController.deleteSermon);
router.put('/resources/update/:id', resourceController.updateSermon);

module.exports = router;
