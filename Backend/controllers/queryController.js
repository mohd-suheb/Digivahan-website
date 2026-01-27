const Query = require('../models/Query');

// Add Query
exports.addQuery = async (req, res) => {
  try {
    const queryId = `QRY-${Date.now()}`;
    
    const query = await Query.create({
      ...req.body,
      queryId
    });

    return res.status(201).json({
      success: true,
      message: "Query submitted successfully",
      query
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error submitting query", 
      error: error.message 
    });
  }
};

// Get All Queries (Admin)
exports.getAllQueries = async (req, res) => {
  try {
    const { category, status } = req.query;
    
    let filter = {};
    if (category) filter.category = category;
    if (status) filter.status = status;

    const queries = await Query.find(filter).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: queries.length,
      queries
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching queries" 
    });
  }
};

// Reply to Query
exports.replyQuery = async (req, res) => {
  try {
    const { reply } = req.body;

    const query = await Query.findByIdAndUpdate(
      req.params.id,
      { 
        reply,
        status: 'replied'
      },
      { new: true }
    );

    if (!query) {
      return res.status(404).json({ 
        success: false, 
        message: "Query not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Reply sent successfully",
      query
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error replying to query" 
    });
  }
};

// Resolve Query
exports.resolveQuery = async (req, res) => {
  try {
    const query = await Query.findByIdAndUpdate(
      req.params.id,
      { status: 'resolved' },
      { new: true }
    );

    if (!query) {
      return res.status(404).json({ 
        success: false, 
        message: "Query not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Query resolved successfully",
      query
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error resolving query" 
    });
  }
};