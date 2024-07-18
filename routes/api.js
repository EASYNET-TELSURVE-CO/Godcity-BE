// routes/api.js
const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const eventController = require('../controllers/eventController');
const forumController = require('../controllers/forumController');
const resourceController = require('../controllers/resourceController');

// Member routes
router.get('/members', memberController.getAllMembers);
router.post('/members', memberController.createMember);
router.put('/members/:id', memberController.updateMember);
router.delete('/members/:id', memberController.deleteMember);

// Event routes
router.get('/events', eventController.getAllEvents);
router.post('/events', eventController.createEvent);
router.put('/events/:id', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEvent);

// Forum routes
router.get('/topics', forumController.getAllTopics);
router.post('/topics', forumController.createTopic);
router.get('/topics/:topicId/posts', forumController.getPostsForTopic);
router.post('/topics/:topicId/posts', forumController.createPost);

// Resource routes
router.post('/resources/documents', resourceController.uploadDocument);

module.exports = router;
