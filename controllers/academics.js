const { findAllFromDb } = require("../database/connection");

const ScienceData = async (req,res) => {
    const query = {type:"general"};
    try {
      const Data = await findAllFromDb(query,"academicsData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
 }
 const EnvironmentData = async (req,res) => {
    const query = {type:"fashion"};
    try {
      const Data = await findAllFromDb(query,"academicsData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
 }
 
 const RoboticsData = async (req,res) => {
    const query = {type:"biography"};
    try {
      const Data = await findAllFromDb(query,"academicsData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
 }
 
 const TechnologyData = async (req,res) => {
    const query = {type:"fitness"};
    try {
      const Data = await findAllFromDb(query,"academicsData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
 }
 
 const TravelData = async (req,res) => {
    const query = {type:"travel"};
    try {
      const Data = await findAllFromDb(query,"academicsData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
  }
  
module.exports.getScienceData = ScienceData;
module.exports.getEnvironmentData = EnvironmentData;
module.exports.getRoboticsData = RoboticsData;
module.exports.getTechnologyData = TechnologyData;
module.exports.getTravelData = TravelData;