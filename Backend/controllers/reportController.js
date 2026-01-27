const Report = require('../models/Report');

// Submit Report
exports.submitReport = async (req, res) => {
  try {
    const reportId = `RPT-${Date.now()}`;
    
    const report = await Report.create({
      ...req.body,
      reportId
    });

    return res.status(201).json({
      success: true,
      message: "Report submitted successfully",
      report
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error submitting report", 
      error: error.message 
    });
  }
};

// Get All Reports (Admin)
exports.getAllReports = async (req, res) => {
  try {
    const { reportType, status } = req.query;
    
    let filter = {};
    if (reportType) filter.reportType = reportType;
    if (status) filter.status = status;

    const reports = await Report.find(filter).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: reports.length,
      reports
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching reports" 
    });
  }
};

// Update Report Status
exports.updateReportStatus = async (req, res) => {
  try {
    const { status, actionTaken } = req.body;

    const report = await Report.findByIdAndUpdate(
      req.params.id,
      { status, actionTaken },
      { new: true }
    );

    if (!report) {
      return res.status(404).json({ 
        success: false, 
        message: "Report not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Report status updated successfully",
      report
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error updating report" 
    });
  }
};