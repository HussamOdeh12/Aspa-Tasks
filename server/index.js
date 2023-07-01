import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cardRoutes from "./routes/cards.js";
import userRouter from "./routes/user.js";

// Creating an instance of the Express application
const app = express();

dotenv.config();

/*
Configuring middleware for handling JSON and URL-encoded data
30mb => for uploading images
extended: allowing for more complex objects to be encoded
*/
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

// Enable CORS for all routes
app.use(cors());

app.use("/cards", cardRoutes);
app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(error.message));
