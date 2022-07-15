const mongoose=require("mongoose");
const movieSchema=new mongoose.Schema(
    {
        movie_name: { type: String, require: true },
        movie_title: { type: String, require: true },
        category: { type: String, require: true },
        price: { type: Number, require: true },
        movie_rating: { type: Number, require: true },
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
module.exports= mongoose.model("movie", movieSchema);

//movies Schema