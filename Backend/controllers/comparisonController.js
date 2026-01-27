const Comparison = require('../models/Comparison');
const TrendingCar = require('../models/Trendingcar');

// Add Comparison
exports.addComparison = async (req, res) => {
  try {
    const { car1Id, car2Id } = req.body;

    const car1 = await TrendingCar.findOne({ trendingCarId: car1Id });
    const car2 = await TrendingCar.findOne({ trendingCarId: car2Id });

    if (!car1 || !car2) {
      return res.status(404).json({ 
        success: false, 
        message: "One or both cars not found" 
      });
    }

    const comparisonId = `CMP-${Date.now()}`;

    const comparison = await Comparison.create({
      comparisonId,
      car1Id,
      car2Id,
      car1Details: car1,
      car2Details: car2
    });

    return res.status(201).json({
      success: true,
      message: "Comparison added successfully",
      comparison
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error adding comparison", 
      error: error.message 
    });
  }
};

// Get All Comparisons
exports.getAllComparisons = async (req, res) => {
  try {
    const comparisons = await Comparison.find({ status: 'active' });

    return res.status(200).json({
      success: true,
      count: comparisons.length,
      comparisons
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching comparisons" 
    });
  }
};

// Get Comparison by ID
exports.getComparisonById = async (req, res) => {
  try {
    const comparison = await Comparison.findOne({ comparisonId: req.params.id });

    if (!comparison) {
      return res.status(404).json({ 
        success: false, 
        message: "Comparison not found" 
      });
    }

    return res.status(200).json({
      success: true,
      comparison
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching comparison" 
    });
  }
};

// Update Comparison
exports.updateComparison = async (req, res) => {
  try {
    const { car1Id, car2Id } = req.body;

    const car1 = await TrendingCar.findOne({ trendingCarId: car1Id });
    const car2 = await TrendingCar.findOne({ trendingCarId: car2Id });

    const comparison = await Comparison.findOneAndUpdate(
      { comparisonId: req.params.id },
      { 
        car1Id, 
        car2Id,
        car1Details: car1,
        car2Details: car2
      },
      { new: true }
    );

    if (!comparison) {
      return res.status(404).json({ 
        success: false, 
        message: "Comparison not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Comparison updated successfully",
      comparison
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error updating comparison" 
    });
  }
};

// Delete Comparison
exports.deleteComparison = async (req, res) => {
  try {
    const comparison = await Comparison.findOneAndUpdate(
      { comparisonId: req.params.id },
      { status: 'deleted' },
      { new: true }
    );

    if (!comparison) {
      return res.status(404).json({ 
        success: false, 
        message: "Comparison not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Comparison deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error deleting comparison" 
    });
  }
};