const express = require('express');
const Data = require('../controllers/classics');

const mainRouter = express.Router();

mainRouter.route("/classics/1").get(Data.getChildrenData)
mainRouter.route("/classics/2").get(Data.getDramaData)
mainRouter.route("/classics/3").get(Data.getFictionData)
mainRouter.route("/classics/4").get(Data.getHorrorData)
mainRouter.route("/classics/5").get(Data.getHumorData)



module.exports = mainRouter