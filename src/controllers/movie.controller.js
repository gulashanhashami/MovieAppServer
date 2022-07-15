const path= require("path");
const express=require("express");
const Movie=require("../models/movie.model")
const router=express.Router();
//post the data
router.post("", async(req, res)=>{
    try {
        const movie= await Movie.create(req.body);
        return res.status(201).send(movie);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//get the data
router.get("", async(req,res)=>{
    try {

      const page=+req.query.page || 1;
      const size=+req.query.size || 10;

      const skip= (page-1)*size;

      const movies=await Movie.find().skip(skip).limit(size).lean().exec();
      const totalPages= Math.ceil((await Movie.find().countDocuments())/size);
      
        return res.status(200).send({movies, totalPages}); 
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//get data by id
router.get("/:id", async (req, res) => {
    try {
   
        const movie = await Movie.findById(req.params.id).lean().exec();
  
        return res.status(200).send({ movies: movie });

    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  //patch the data(means partially upadated not fully)
  router.patch("/:id", async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          })
          .lean()
          .exec();
    
        return res.status(200).send(movie);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });

  //delete the data
  router.delete("/:id", async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();
    
        return res.status(200).send(movie);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });

module.exports=router;

//handle CRUD operation