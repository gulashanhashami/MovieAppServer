const mongoose=require("mongoose");
module.exports= ()=>{
    return mongoose.connect("mongodb+srv://gulashanhashami:EcWv0oD7jYk3ywnd@cluster0.ojiqr.mongodb.net/movie_database?retryWrites=true&w=majority")
}

//Configuration