const express = require('express');
const { getAllReviews, createNewReview } = require('../contollers/reviews');

const router = express.Router();

router.get('/', getAllReviews);
router.post('/', createNewReview);

module.exports = router;
