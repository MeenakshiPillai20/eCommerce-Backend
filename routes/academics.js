const express = require('express');
const Data = require('../controllers/academics');

const mainRouter = express.Router();

mainRouter.route("/academics/1").get(Data.getScienceData)
mainRouter.route("/academics/2").get(Data.getEnvironmentData)
mainRouter.route("/academics/3").get(Data.getRoboticsData)
mainRouter.route("/academics/4").get(Data.getTechnologyData)
mainRouter.route("/academics/5").get(Data.getTravelData)



module.exports = mainRouter