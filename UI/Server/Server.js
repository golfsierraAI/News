const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/FruitDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const fruitSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  rating: Number,
  review: String,
});
const Fruit = mongoose.model("Fruit", fruitSchema);
// const fruit = new Fruit({
//   _id: 1,
//   name: "Apple",
//   rating: 7,
//   review: "Nice Apples",
// });
// fruit.save();
Fruit.find((err, data) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    data.forEach((i) => {
      console.log(i.name);
    });
  }
});
