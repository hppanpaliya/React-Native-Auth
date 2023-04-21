// Import required modules and define Express router
const express = require("express");
const router = express.Router();

// Define the protected route
router.get("/protected", ensureAuthenticated, (req, res) => {
  res.send("This is a protected route for logged-in users only.");
});

// Middleware to check if the user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // If the user is authenticated, continue to the next middleware or route handler
    return next();
  }
  // If the user is not authenticated, redirect to the login page or return an error message
  res.redirect("/auth/login");
}

// Export the router
module.exports = router;
