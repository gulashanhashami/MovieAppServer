const express=require("express");
const app=express();
const cors = require('cors'); 
const connect = require('./configs/db');
const movieController=require("./controllers/movie.controller")


app.use(express.json())
const corsOptions = {
    origin: '*',   //'*' to make it general or any domain can access or load the data on browser
    credentials: true,  //you can replace the '*' by domain name like as "https://gulashanhashami.in" 
    optionSuccessStatus: 200, //then the data will be load on this domain only and for other domain it 
  }                           //will show cors block error
  app.use(cors(corsOptions));
app.use("/movies", movieController);


const port = process.env.PORT || 2345; //environment variable port, need to tell the Heroku at the deployment
app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log(`listening on port ${port}`);
});

