const { findAllFromDb } = require("../database/connection");

const ChildrenData = async (req,res) => {
    const query = {type:"general"};
    try {
      const Data = await findAllFromDb(query,"classicsData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
 }
 const DramaData = async (req,res) => {
    const query = {type:"fashion"};
    try {
      const Data = await findAllFromDb(query,"classicsData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
 }
 
 const FictionData = async (req,res) => {
    const query = {type:"biography"};
    try {
      const Data = await findAllFromDb(query,"classicsData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
 }
 
 const HorrorData = async (req,res) => {
    const query = {type:"fitness"};
    try {
      const Data = await findAllFromDb(query,"classicsData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
 }
 
 const HumorData = async (req,res) => {
    const query = {type:"travel"};
    try {
      const Data = await findAllFromDb(query,"classicsData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
  }
  module.exports.getChildrenData = ChildrenData;
module.exports.getDramaData = DramaData;
module.exports.getFictionData = FictionData;
module.exports.getHorrorData = HorrorData;
module.exports.getHumorData = HumorData;