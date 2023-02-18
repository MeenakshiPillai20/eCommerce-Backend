const express = require('express');
const Data = require('../controllers/fiction');

const mainRouter = express.Router();

mainRouter.route("/fiction/1").get(Data.getGeneralFictionData)
mainRouter.route("/fiction/2").get(Data.getChildrenFictionData)
mainRouter.route("/fiction/3").get(Data.getAdultFictionData)
mainRouter.route("/fiction/4").get(Data.getCrimeFictionData)

mainRouter.route("/fiction/5").get(Data.getFantasyFictionData)
mainRouter.route("/fiction/6").get(Data.getLiteraryFictionData)
mainRouter.route("/fiction/7").get(Data.getRomanceFictionData)
mainRouter.route("/fiction/8").get(Data.getScienceFictionData)

mainRouter.route("/fiction/9").get(Data.getThrillersFictionData)
mainRouter.route("/fiction/10").get(Data.getHumorFictionData)
mainRouter.route("/fiction/11").get(Data.getHorrorFictionData)
mainRouter.route("/fiction/12").get(Data.getDramaFictionData)


module.exports = mainRouter