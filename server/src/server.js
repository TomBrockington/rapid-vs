const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.disable('x-powered-by');

// Add middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const reviewRouter = require('./routers/reviews');

app.use('/reviews', reviewRouter)

app.get('*', (req, res) => {
    res.json({ ok: true });
});

module.exports = app

