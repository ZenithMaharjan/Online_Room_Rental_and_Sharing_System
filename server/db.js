const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Set mongoose configuration
mongoose.set("strictQuery", false);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Get the default connection object
var connection = mongoose.connection;

connection.on("error", () => {
  console.log("MongoDB Connection failed");
});

connection.on("connected", () => {
  console.log("MongoDB connection successful");
});

module.exports = mongoose;
