const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    type: {
      type: String,
      enum: ['service', 'meeting', 'retreat'],
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    location: {
      type: String
    },
    attendees: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Member'
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  });
  