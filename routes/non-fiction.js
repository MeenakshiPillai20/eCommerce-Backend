const express = require('express');
const Data = require('../controllers/non-fiction');

const mainRouter = express.Router();

mainRouter.route("/non-fiction/1").get(Data.getGeneralData)
mainRouter.route("/non-fiction/2").get(Data.getFashionData)
mainRouter.route("/non-fiction/3").get(Data.getBiographyData)
mainRouter.route("/non-fiction/4").get(Data.getFitnessData)

mainRouter.route("/non-fiction/5").get(Data.getTravelData)
mainRouter.route("/non-fiction/6").get(Data.getBodySpiritData)
mainRouter.route("/non-fiction/7").get(Data.getPhilosophyData)
mainRouter.route("/non-fiction/8").get(Data.getReligiousData)

mainRouter.route("/non-fiction/9").get(Data.getCareerData)
mainRouter.route("/non-fiction/10").get(Data.getGamesData)
mainRouter.route("/non-fiction/11").get(Data.getHealthData)
mainRouter.route("/non-fiction/12").get(Data.getFoodRecipesData)


module.exports = mainRouter