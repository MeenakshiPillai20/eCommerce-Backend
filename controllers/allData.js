const { findAllFromDb } = require("../database/connection");

const AllData = async (req,res) => {
   const query = {type:"all"};
    try {
      const Data = await findAllFromDb(query,"allData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}

const DramaData = async(req,res) => {
   const query = {type:"drama"};
    try {
      const Data = await findAllFromDb(query,"allData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}
const RomanceData = async (req,res) => {
    const query = {type:"romance"};
     try {
       const Data = await findAllFromDb(query,"allData")
       return res.status(200).send(Data);
 
    } catch (error) {
       console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
    }
 }
 
 const CrimeData = async(req,res) => {
    const query = {type:"crime"};
     try {
       const Data = await findAllFromDb(query,"allData")
       return res.status(200).send(Data);
 
    } catch (error) {
       console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
    }
 }
 const HorrorData = async (req,res) => {
    const query = {type:"horror"};
     try {
       const Data = await findAllFromDb(query,"allData")
       return res.status(200).send(Data);
 
    } catch (error) {
       console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
    }
 }
 
 const LiteraryData = async(req,res) => {
    const query = {type:"literary"};
     try {
       const Data = await findAllFromDb(query,"allData")
       return res.status(200).send(Data);
 
    } catch (error) {
       console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
    }
 }

 const Base1 = async (req,res) => {
    const query = {type:"base1"};
     try {
       const Data = await findAllFromDb(query,"cardData")
       return res.status(200).send(Data);
 
    } catch (error) {
       console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
    }
 }
 
 const Base2 = async(req,res) => {
    const query = {type:"base2"};
     try {
       const Data = await findAllFromDb(query,"cardData")
       return res.status(200).send(Data);
 
    } catch (error) {
       console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
    }
 }
module.exports.getAllData = AllData;
module.exports.getDramaData = DramaData;
module.exports.getRomanceData = RomanceData;
module.exports.getCrimeData = CrimeData;
module.exports.getHorrorData = HorrorData;
module.exports.getLiteraryData = LiteraryData;
module.exports.getBase1 = Base1;
module.exports.getBase2 = Base2;