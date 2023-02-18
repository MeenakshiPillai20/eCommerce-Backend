const { findAllFromDb } = require("../database/connection");

const GeneralFictionData = async (req,res) => {
   const query = {type:"general"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}

const ChildrenFictionData = async(req,res) => {
   const query = {type:"children"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}

const AdultFictionData = async(req,res) => {
   const query = {type:"adult"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}

const CrimeFictionData = async(req,res) => {
   const query = {type:"crime"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}



const FantasyFictionData = async (req,res) => {
   const query = {type:"fantacy"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
 }

const LiteraryFictionData = async(req,res) => {
   const query = {type:"literary"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}

const RomanceFictionData = async(req,res) => {
   const query = {type:"romance"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}

const ScienceFictionData = async(req,res) => {
   const query = {type:"science"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}



const ThrillersFictionData = async (req,res) => {
   const query = {type:"thriller"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
 }

const HumorFictionData = async(req,res) => {
   const query = {type:"humor"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}

const HorrorFictionData = async(req,res) => {
   const query = {type:"horror"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}

const DramaFictionData = async(req,res) => {
   const query = {type:"drama"};
    try {
      const Data = await findAllFromDb(query,"fictionData")
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}


module.exports.getGeneralFictionData = GeneralFictionData;
module.exports.getCrimeFictionData = CrimeFictionData;
module.exports.getChildrenFictionData = ChildrenFictionData;
module.exports.getAdultFictionData = AdultFictionData;

module.exports.getFantasyFictionData = FantasyFictionData;
module.exports.getLiteraryFictionData = LiteraryFictionData;
module.exports.getRomanceFictionData = RomanceFictionData;
module.exports.getScienceFictionData = ScienceFictionData;

module.exports.getThrillersFictionData = ThrillersFictionData;
module.exports.getHumorFictionData = HumorFictionData;
module.exports.getHorrorFictionData = HorrorFictionData;
module.exports.getDramaFictionData = DramaFictionData;