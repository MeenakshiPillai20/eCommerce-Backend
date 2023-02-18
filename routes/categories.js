const express = require('express');
const Data = require('../controllers/categories');

const mainRouter = express.Router();

mainRouter.route("/fiction").get(Data.getFictionData)
mainRouter.route("/non-fiction").get(Data.getNonFictionData)
mainRouter.route("/classics").get(Data.getClassicsData)
mainRouter.route("/academics").get(Data.getAcademicsData)

module.exports = mainRouter