const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");
const dbConnection = require("./config/mongodb");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);

dbConnection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});

dbConnection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
