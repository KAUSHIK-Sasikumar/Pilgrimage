const Temple = require("../models/Temple");

// @desc    Create a new temple
// @route   POST /api/temples
// @access  Private (Admin only in future, for now anyone can)
exports.createTemple = async (req, res) => {
  try {
    const { name, location, timings, specialEvents, crowdStatus } = req.body;

    const temple = new Temple({
      name,
      location,
      timings,
      specialEvents,
      crowdStatus,
    });

    await temple.save();
    res.status(201).json(temple);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all temples
// @route   GET /api/temples
// @access  Public
exports.getTemples = async (req, res) => {
  try {
    const temples = await Temple.find();
    res.json(temples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single temple by ID
// @route   GET /api/temples/:id
// @access  Public
exports.getTempleById = async (req, res) => {
  try {
    const temple = await Temple.findById(req.params.id);
    if (!temple) return res.status(404).json({ message: "Temple not found" });

    res.json(temple);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update temple
// @route   PUT /api/temples/:id
// @access  Private (Admin ideally)
exports.updateTemple = async (req, res) => {
  try {
    const temple = await Temple.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!temple) return res.status(404).json({ message: "Temple not found" });

    res.json(temple);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete temple
// @route   DELETE /api/temples/:id
// @access  Private (Admin ideally)
exports.deleteTemple = async (req, res) => {
  try {
    const temple = await Temple.findByIdAndDelete(req.params.id);
    if (!temple) return res.status(404).json({ message: "Temple not found" });

    res.json({ message: "Temple deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
