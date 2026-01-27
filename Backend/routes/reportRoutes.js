const express = require('express');
const router = express.Router();
const { 
  submitReport, 
  getAllReports, 
  updateReportStatus
} = require('../controllers/reportController');
const { isauth, isadmin } = require('../middleware/auth');

router.post('/', isauth, submitReport);
router.get('/', isauth, isadmin, getAllReports);
router.put('/:id/status', isauth, isadmin, updateReportStatus);

module.exports = router;