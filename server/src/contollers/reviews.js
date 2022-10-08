const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');

const {
  findUserByEmail,
  createNewUser,
  createReview,
  calculateAverage,
  findAllReviews,
  findReviewById,
  deleteReview
} = require('../domain/reviews');

const getAllReviews = async (req, res) => {
  try {
    const foundReviews = await findAllReviews();

    let averageScore = await calculateAverage()
    averageScore = averageScore._avg.rating

    return res.status(200).json({ data: foundReviews, averageScore });
  } catch (err) {
    return res.status(500).json({ err: err });
  }
};

const createNewReview = async (req, res) => {
  const { content, rating, email } = req.body;
  console.log(email);

  try {
    const foundUser = await findUserByEmail(email);
    if (foundUser) {
      return res
        .status(400)
        .json({ message: 'User has already left a review!' });
    }

    const newUser = await createNewUser(email);

    const newReview = await createReview(email, newUser.id, content, rating);

    let averageScore = await calculateAverage()
    averageScore = averageScore._avg.rating

    return res
      .status(201)
      .json({ data: newReview, averageScore, message: 'Review created!' });
  } catch (error) {
    return res.status(500).json({ message: '500 Fail' });
  }
};

const deleteReviewById = async (req, res) => {
  console.log('deleting')
  const reviewId = Number(req.params.id)
  console.log('reviewId', reviewId)

  try {

    const foundReview = await findReviewById(reviewId)
    console.log('foundReview', foundReview)

    if (!foundReview) {
      return res
       .status(404).json({ error: 'Review not found'})
    }

    const deletedReview = await deleteReview(reviewId)
    console.log('deletedReview', deletedReview)

    let averageScore = await calculateAverage()
    averageScore = averageScore._avg.rating

    return res
     .status(200).json({ data: { deletedReview, averageScore } })

  } catch (err) { 
    return res.status(500).json({ message: '500 Fail' });
  }
};

module.exports = {
  getAllReviews,
  createNewReview,
  deleteReviewById
};
