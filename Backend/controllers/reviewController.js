const Review = require('../models/Review');

// Add Review
exports.addReview = async (req, res) => {
  try {
    const reviewId = `REV-${Date.now()}`;
    const { rating } = req.body;

    let category = 'average';
    if (rating >= 4) category = 'positive';
    if (rating <= 2) category = 'negative';

    const review = await Review.create({
      ...req.body,
      reviewId,
      category
    });

    return res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      review
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error submitting review", 
      error: error.message 
    });
  }
};

// Get All Reviews
exports.getAllReviews = async (req, res) => {
  try {
    const { category } = req.query;
    
    let filter = {};
    if (category) filter.category = category;

    const reviews = await Review.find(filter).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: reviews.length,
      reviews
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching reviews" 
    });
  }
};

// Reply to Review
exports.replyReview = async (req, res) => {
  try {
    const { reply } = req.body;

    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { 
        reply,
        status: 'replied'
      },
      { new: true }
    );

    if (!review) {
      return res.status(404).json({ 
        success: false, 
        message: "Review not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "Reply sent successfully",
      review
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error replying to review" 
    });
  }
};