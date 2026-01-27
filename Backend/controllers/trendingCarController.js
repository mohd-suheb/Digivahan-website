const TrendingCar = require('../models/Trendingcar');

// Add Trending Car
exports.addTrendingCar = async (req, res) => {
  try {
    const car = await TrendingCar.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Trending car added successfully",
      car
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error adding car", 
      error: error.message 
    });
  }
};

// Get All Trending Cars
exports.getAllTrendingCars = async (req, res) => {
  try {
    const cars = await TrendingCar.find();

    return res.status(200).json({
      success: true,
      count: cars.length,
      cars
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching cars" 
    });
  }
};

// Get Trending Car by ID
exports.getTrendingCarById = async (req, res) => {
  try {
    const car = await TrendingCar.findOne({ trendingCarId: req.params.id });

    if (!car) {
      return res.status(404).json({ 
        success: false, 
        message: "Car not found" 
      });
    }

    return res.status(200).json({
      success: true,
      car
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching car" 
    });
  }
};

// Update Trending Car
exports.updateTrendingCar = async (req, res) => {
  try {
    const car = await TrendingCar.findOneAndUpdate(
      { trendingCarId: req.params.id },
      req.body,
      { new: true }
    );

    if (!car) {
      return res.status(404).json({ 
        success: false, 
        message: "Car not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Car updated successfully",
      car
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error updating car" 
    });
  }
};

// Delete Trending Car
exports.deleteTrendingCar = async (req, res) => {
  try {
    const car = await TrendingCar.findOneAndDelete({ trendingCarId: req.params.id });

    if (!car) {
      return res.status(404).json({ 
        success: false, 
        message: "Car not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Car deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error deleting car" 
    });
  }
};