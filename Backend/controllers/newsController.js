const News = require('../models/News');

// Add News
exports.addNews = async (req, res) => {
  try {
    const newsId = `NEWS-${Date.now()}`;
    
    const news = await News.create({
      ...req.body,
      newsId
    });

    return res.status(201).json({
      success: true,
      message: "News added successfully",
      news
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error adding news", 
      error: error.message 
    });
  }
};

// Get All News
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find({ status: 'active' }).sort({ publishedAt: -1 });

    return res.status(200).json({
      success: true,
      count: news.length,
      news
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching news" 
    });
  }
};

// Update News
exports.updateNews = async (req, res) => {
  try {
    const news = await News.findOneAndUpdate(
      { newsId: req.params.id },
      req.body,
      { new: true }
    );

    if (!news) {
      return res.status(404).json({ 
        success: false, 
        message: "News not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "News updated successfully",
      news
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error updating news" 
    });
  }
};

// Delete News
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findOneAndUpdate(
      { newsId: req.params.id },
      { status: 'deleted' },
      { new: true }
    );

    if (!news) {
      return res.status(404).json({ 
        success: false, 
        message: "News not found" 
      });
    }

    return res.status(200).json({
      success: true,
      message: "News deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error deleting news" 
    });
  }
};