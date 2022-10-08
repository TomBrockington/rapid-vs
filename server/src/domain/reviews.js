const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');

const findUserByEmail = (email) =>
  prisma.user.findFirst({
    where: { email: email },
  });

const createNewUser = (email) =>
  prisma.user.create({
    data: {
      email: email,
      password: 'abc',
    },
  });

const createReview = (email, userId, content, rating) =>
  prisma.review.create({
    data: {
      email: email,
      userId: userId,
      content: content,
      rating: rating,
    },
  });

const calculateAverage = () =>
  prisma.review.aggregate({
    _avg: {
        rating: true,
    },
  });

const findAllReviews = () =>
  prisma.review.findMany({
    orderBy: { rating: 'asc' },
  });

module.exports = {
  findUserByEmail,
  createNewUser,
  createReview,
  findAllReviews,
  calculateAverage
};
