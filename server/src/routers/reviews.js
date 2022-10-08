const express = require('express');
const { getAllReviews, createNewReview, deleteReviewById } = require('../contollers/reviews');

const router = express.Router();

router.get('/', getAllReviews);
router.post('/', createNewReview);
router.delete('/:id', deleteReviewById);

module.exports = router;
