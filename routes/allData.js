const express = require('express');
const Data = require('../controllers/allData');

const mainRouter = express.Router();

mainRouter.route("/Data/1").get(Data.getAllData)
mainRouter.route("/Data/2").get(Data.getDramaData)
mainRouter.route("/Data/3").get(Data.getRomanceData)
mainRouter.route("/Data/4").get(Data.getCrimeData)
mainRouter.route("/Data/5").get(Data.getHorrorData)
mainRouter.route("/Data/6").get(Data.getLiteraryData)

mainRouter.route("/Base/1").get(Data.getBase1)
mainRouter.route("/Base/2").get(Data.getBase2)


module.exports = mainRouter