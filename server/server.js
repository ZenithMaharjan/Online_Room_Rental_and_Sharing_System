const express = require("express");
const app = express();
const connectDB = require("./db");
const auth = require("./routes/auth");
const property = require("./routes/propertyRoute");
const userRoute = require("./routes/user");
const formsRoute = require("./routes/form");
const wishlistRoute = require("./routes/wishlist");
const cors = require("cors");

// Connect to the database
connectDB();

// CORS Configuration
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware for parsing JSON bodies
app.use(express.json());

// Routes
app.use("/api/auth", auth);
app.use("/api/properties", property);
app.use("/api/users", userRoute);
app.use("/api/forms", formsRoute);
app.use("/api/wishlists", wishlistRoute);

// Server Initialization
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
