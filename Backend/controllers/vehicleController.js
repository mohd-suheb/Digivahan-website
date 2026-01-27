const Vehicle = require('../models/Vehicle');

// Add Vehicle
// exports.addVehicle = async (req, res) => {
//   console.log("Add Vehicle ",req.body);
//   try {
//     const vehicle = await Vehicle.create({
//       ...req.body,
//       userId: req.user.id
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Vehicle added successfully",
//       vehicle
//     });
//   } catch (error) {
//     return res.status(500).json({ 
//       success: false, 
//       message: "Error adding vehicle", 
//       error: error.message 
//     });
//   }
// };

exports.addVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create({
      vehicleNumber: req.body.vehicleNumber,
      ownerName: req.body.ownerName,
      vehicleType: req.body.vehicleType,
      rcDocument: req.body.rcDocument,
      insuranceDocument: req.body.insuranceDocument,
      pucDocument: req.body.pucDocument,
      insuranceExpiry: req.body.insuranceExpiry,
      pucExpiry: req.body.pucExpiry,
      userId: req.user.id
    });

    res.status(201).json({
      success: true,
      message: "Vehicle added successfully",
      vehicle
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding vehicle",
      error: error.message
    });
  }
};


// Get All Vehicles
exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ userId: req.user.id });

    return res.status(200).json({
      success: true,
      count: vehicles.length,
      vehicles
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching vehicles" 
    });
  }
};

// Get Vehicle by ID
exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({ 
        success: false, 
        message: "Vehicle not found" 
      });
    }

    return res.status(200).json({
      success: true,
      vehicle
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching vehicle" 
    });
  }
};

// Update Vehicle
exports.updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!vehicle) {
      return res.status(404).json({ 
        success: false, 
        message: "Vehicle not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Vehicle updated successfully",
      vehicle
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error updating vehicle" 
    });
  }
};

// Delete Vehicle
exports.deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

    if (!vehicle) {
      return res.status(404).json({ 
        success: false, 
        message: "Vehicle not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Vehicle deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error deleting vehicle" 
    });
  }
};