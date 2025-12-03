const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);//user routes

app.use(express.static("public"));//middleware to serve static files

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

//const db=process.env.password;
//console.log(db);

///URL/api/users --- all user details
///url/api/users {body} ---create user
///url/api/users/:id {body} --- update user
///url/api/users/:id --- delete user
