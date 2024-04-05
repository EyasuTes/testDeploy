// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a route for handling GET requests
app.get("/", (req, res) => {
  res.send("Hello, World! This is a simple Node.js backend server.");
});

// Define a route for handling POST requests
app.post("/api/data", (req, res) => {
  const requestData = req.body;
  console.log("Received POST request with data:", requestData);
  res.json({ message: "Data received successfully.", data: requestData });
});

// Define a route for handling other HTTP methods or paths
app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});

// Set up the server to listen on port 3000
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
