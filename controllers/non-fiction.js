const { findAllFromDb } = require("../database/connection");

const GeneralData = async (req,res) => {
      const query = {type:"general"};
      try {
        const Data = await findAllFromDb(query,"nonFictionData")
        return res.status(200).send(Data);
  
     } catch (error) {
        console.log("Error occur in  fetching data",error)
        return res.status(500).send({message:"something went wrong"})
     }
}
const FashionData = async (req,res) => {
   const query = {type:"fashion"};
   try {
     const Data = await findAllFromDb(query,"nonFictionData")
     return res.status(200).send(Data);

  } catch (error) {
     console.log("Error occur in  fetching data",error)
     return res.status(500).send({message:"something went wrong"})
  }
}
const BiographyData = async (req,res) => {
   const query = {type:"biography"};
   try {
     const Data = await findAllFromDb(query,"nonFictionData")
     return res.status(200).send(Data);

  } catch (error) {
     console.log("Error occur in  fetching data",error)
     return res.status(500).send({message:"something went wrong"})
  }
}
const FitnessData = async (req,res) => {
   const query = {type:"fitness"};
   try {
     const Data = await findAllFromDb(query,"nonFictionData")
     return res.status(200).send(Data);

  } catch (error) {
     console.log("Error occur in  fetching data",error)
     return res.status(500).send({message:"something went wrong"})
  }
}


const TravelData = async (req,res) => {
   const query = {type:"travel"};
   try {
      const Data = await findAllFromDb(query,"nonFictionData")
      return res.status(200).send(Data);
 
   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}
const BodySpiritData = async (req,res) => {
   const query = {type:"body"};
   try {
       const Data = await findAllFromDb(query,"nonFictionData")
       return res.status(200).send(Data);
  
   } catch (error) {
       console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
      }
}
const PhilosophyData = async (req,res) => {
    const query = {type:"philosophy"};
    try {
        const Data = await findAllFromDb(query,"nonFictionData")
        return res.status(200).send(Data);
   
    } catch (error) {
        console.log("Error occur in  fetching data",error)
        return res.status(500).send({message:"something went wrong"})
       }
}
const ReligiousData = async (req,res) => {
    const query = {type:"religious"};
    try {
        const Data = await findAllFromDb(query,"nonFictionData")
        return res.status(200).send(Data);
   
    } catch (error) {
        console.log("Error occur in  fetching data",error)
        return res.status(500).send({message:"something went wrong"})
       }
}

const CareerData = async (req,res) => {
   const query = {type:"career"};
   try {
        const Data = await findAllFromDb(query,"nonFictionData")
        return res.status(200).send(Data);
   } catch (error) {
        console.log("Error occur in  fetching data",error)
        return res.status(500).send({message:"something went wrong"})
   }
}
const GamesData = async (req,res) => {
   const query = {type:"games"};
   try {
        const Data = await findAllFromDb(query,"nonFictionData")
        return res.status(200).send(Data);
   } catch (error) {
        console.log("Error occur in  fetching data",error)
        return res.status(500).send({message:"something went wrong"})
   }
}
const HealthData = async (req,res) => {
   const query = {type:"health"};
   try {
        const Data = await findAllFromDb(query,"nonFictionData")
        return res.status(200).send(Data);
   } catch (error) {
        console.log("Error occur in  fetching data",error)
        return res.status(500).send({message:"something went wrong"})
   }
}
const FoodRecipesData = async (req,res) => {
   const query = {type:"food"};
   try{
        const Data = await findAllFromDb(query,"nonFictionData")
        return res.status(200).send(Data);
   } catch(error){
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}

module.exports.getGeneralData = GeneralData;
module.exports.getFashionData = FashionData;
module.exports.getBiographyData = BiographyData;
module.exports.getFitnessData = FitnessData;

module.exports.getTravelData = TravelData;
module.exports.getBodySpiritData = BodySpiritData;
module.exports.getPhilosophyData = PhilosophyData;
module.exports.getReligiousData = ReligiousData;

module.exports.getCareerData = CareerData;
module.exports.getGamesData = GamesData;
module.exports.getHealthData = HealthData;
module.exports.getFoodRecipesData = FoodRecipesData;