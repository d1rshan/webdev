import mongoose from "mongoose";

// - Schemas are blueprints that defines structure of a document in MongoDB database collection.

// Defining Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
});


// - Model is a constructor function that represents a collection in MongoDB and defines the schema for each document

// Creating Model - create a model for "movie" collection using the schema
const MovieModel = mongoose.model("Movie", movieSchema);
// mongodb stores the collection name as movies for Movie model


// -------------------------------------------------------------------------------------------------------------------------------------

// 👉 WRITE DOCUMENT

const createDoc = async () => {
  try {
    // create a new document
    const m1 = new MovieModel({
      name: "John Wick",
      ratings: 4,
      money: 69000,
      genre: ['action', 'adventure'],
      isActive: true,
      comments: [ {value: "That was an amazing movie"}, {value: "Broooo, brooooooooo fire undhi asalu"}]
    })

    const res = await m1.save()
    console.log(res)

  } catch (error) {
    console.log("Error creating document!",error)
  }
}

const insertManyDocs = async () => {
  try {
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });
    const m2 = new MovieModel({
      name: "John Wick Chapter 4",
      ratings: 5,
      money: 23000,
      genre: ["action"],
      isActive: true,
      comments: [{ value: "John doesn't seem that angery any more :(" }],
    });
    const m3 = new MovieModel({
      name: "Mission: Impossible - Dead Reckoning Part One",
      ratings: 4,
      money: 60000,
      genre: ["action", "spy", "crime film", "thriller"],
      isActive: true,
      comments: [{ value: "Ok that was Tom but where is Jerry?" }],
    });
    const m4 = new MovieModel({
      name: "Transformers: Rise of the Beasts",
      ratings: 4,
      money: 220000,
      genre: ["action", "adventure", "Science Fiction", "Fantasy"],
      isActive: true,
      comments: [{ value: "That was enough VFX for today" }],
    });
    const m5 = new MovieModel({
      name: "The Expendables 4",
      ratings: 4,
      money: 220000,
      genre: ["action", "war", "comedy", "thriller"],
      isActive: true,
      comments: [{ value: "That was enough VFX for today" }],
    });

    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// export { createDoc,insertManyDocs };

// -------------------------------------------------------------------------------------------------------------------------------------

// 👉 READ DOCUMENT

// --------- 1. Retrive all document ---------
const allDocs = async () => {
  try {
    // All data
    // const result = await MovieModel.find();
    // console.log(result);
    // Iterating over the data (specific data)
    // result.forEach((item) => {
    //   console.log(item.name);
    //   console.log(item.ratings);
    //   console.log(item.money);
    // });
  } catch (error) {
    console.log(error);
  }
};

// --------- 2. Retrive Single Document ---------
const singleDoc = async () => {
  // const result = await movieModel.findById("649ab23e38eecfddee75ea65");
  // console.log(result);
  // Notice previously we were getting array
  // BUT now in this case we're getting object
  // Which means we don't have to iterate over our data.
  // console.log(result.name);
  // console.log(result.ratings);
  // console.log(result.money);
  // console.log(result.genre);
  // console.log(result.isActive);
  // console.log(result.comments);
};

// --------- 3. Retrive Single Document with Specifc Field ---------
const getDocById = async () => {
  // const result = await movieModel.findById("649ab23e38eecfddee75ea67", "name");
  // console.log(result);
};

// --------- 4. Retrive Document with Specifc Field ---------
const docWithField = async () => {
  // const result = await movieModel.find({ name: "Extraction 2" });
  // const result = await movieModel.find({ ratings: 3 });
  // console.log(result);
};

// --------- 5. Retrive limited document ---------
const getLimitedDoc = async () => {
  // const result = await movieModel.find().limit(3);
  // console.log(result);
};

// --------- 6. Retrive limited document ---------
const skipDoc = async () => {
  // const result = await movieModel.find().skip(2);
  // console.log(result);
};

// --------- 7. How many documents we have ---------
const countDoc = async () => {
  // const result = await movieModel.find().countDocuments();
  // console.log(result);
};

// --------- 8. Sort Documents ---------
const sortDoc = async () => {
  // sort by names
  // const result = await movieModel.find().sort({ names: -1 });
  // console.log(result);
};

// --------- 9. Comparison Query Operators ---------
const operato = async () => {
  // COMPARISON OPERATORS

  // const result = await movieModel.find({ money: { $gt: 60000 } });
  // const result = await movieModel.find({ money: { $lt: 90000 } });
  // const result = await movieModel.find({ money: { $ne: 90000 } }); // $ne (not-equal)
  // console.log(result);

  // LOGICAL OPERATORS
  // const result = await movieModel.find({
  //   // give me a movie who have made 60000 money and ratings is 4
  //   $and: [{ money: 60000 }, { ratings: 4 }],
  // });

  // const result = await movieModel.find({
  //   // give me a movie who have made 60000 money OR ratings is 4
  //   $or: [{ money: 60000 }, { ratings: 4 }],
  // });

  const result = await movieModel.find({ ratings: { $not: { $gt: 5 } } });
  console.log(result);
};

// export { allDocs,singleDoc,getDocById, docWithField,getLimitedDoc,skipDoc,  countDoc,sortDoc,operato};

// -------------------------------------------------------------------------------------------------------------------------------------

// 👉 UPDATE DOCUMENT
const updateByID = async () => {
  // updateOne(filter, whatToChange?)
  // try {
  //   const result = await MovieModel.findByIdAndUpdate(
  //     "649b41a505c6903acd50a32d",
  //     {
  //       name: "Mission: Impossible",
  //       genre: ["Action", "Science fiction", "Adventure", "Fantasy"],
  //     }
  //   );
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
};

// Update only one
// updateOne(filter, whatToChange?)
const updateOne = async (id) => {
  // try {
  //   const result = await movieModel.updateOne(
  //     { _id: id },
  //     { name: "John Wick: Chapter 4" }
  //   );
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
};

// UPDATE MANY
const updateMany = async () => {
  try {
    const result = await movieModel.updateMany(
      { ratings: 5 },
      { comments: [{ value: "5 Star Movies" }] }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// export { updateByID, updateOne, updateMany };


// -------------------------------------------------------------------------------------------------------------------------------------

// 👉 DELETE DOCUMENT
const deleteOne = async (id) => {
  // try {
  //   // const result = await movieModel.findByIdAndDelete(id);
  //   const result = await movieModel.deleteOne(id);
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
};

const deleteMany = async () => {
  // try {
  //   const result = await movieModel.deleteMany({ ratings: 4 });
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
};

// export { deleteOne, deleteMany };