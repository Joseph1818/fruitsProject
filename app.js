const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
  useNewUrlParser: true,
});

// create a schema

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});
// fruits collection
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty hard as fruit",
});
// to save the elements added in the fruits data dabe
fruit.save();

// Creating car schema and specification
const CarSchema = new mongoose.Schema({
  name: String,
  model: String,
  year: Number,
  mileage: Number,
});
// New Model of the car

const Car = mongoose.model("Car", CarSchema);

const mercedes = new Car({
  name: "mercedes",
  model: "AMG",
  year: 2022,
  mileage: 80000,
});

const audi = new Car({
  name: "audi",
  model: "a4",
  year: 2022,
  mileage: 120000,
});

const bmw = new Car({
  name: "Bmw",
  model: "320i",
  year: 2015,
  mileage: 189000,
});

// This code save the collections into our database.
Fruit.insertMany([mercedes, audi, bmw])
  .then(function () {
    console.log("All models of cars have been succesfully saved into the db");
  })
  .catch(function (err) {
    console.log(err);
  });
