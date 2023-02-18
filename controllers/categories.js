const { findAllFromDb } = require("../database/connection");
const queryData =  {id:1}
const FictionData = async (req,res) => {
     try {
       const Data = await findAllFromDb({},"fictionCategory",queryData)
       return res.status(200).send(Data);
 
    } catch (error) {
       console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
    }
}

const NonFictionData = async (req,res) => {
     try {
       const Data = await findAllFromDb({},"nonFictionCategory",queryData)
       return res.status(200).send(Data);
 
    } catch (error) {
       console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
    }
}


const ClassicsData = async (req,res) => {
    try {
      const Data = await findAllFromDb({},"classicsCategory",queryData)
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}

const AcademicsData = async (req,res) => {
    try {
      const Data = await findAllFromDb({},"academicsCategory",queryData)
      return res.status(200).send(Data);

   } catch (error) {
      console.log("Error occur in  fetching data",error)
      return res.status(500).send({message:"something went wrong"})
   }
}



module.exports.getFictionData = FictionData;
module.exports.getNonFictionData = NonFictionData;
module.exports.getClassicsData = ClassicsData;
module.exports.getAcademicsData = AcademicsData;
