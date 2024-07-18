// controllers/memberController.js
const Member = require('../models/Member');

// Get all members
exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new member
exports.createMember = async (req, res) => {
  const { name, email, phone, address, demographics, affiliation } = req.body;

  try {
    const newMember = new Member({
      name,
      email,
      phone,
      address,
      demographics,
      affiliation
    });

    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a member
exports.updateMember = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedMember = await Member.findByIdAndUpdate(id, updates, { new: true });
    res.json(updatedMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a member
exports.deleteMember = async (req, res) => {
  const { id } = req.params;

  try {
    await Member.findByIdAndDelete(id);
    res.json({ message: 'Member deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
