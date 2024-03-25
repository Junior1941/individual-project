require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const notFound = require("./middlewares/notFound");
// const errorMiddleware = require("./middlewares/error");
const userRoute = require("./src/routes/user-route");
const authRoute = require("./src/routes/auth-route");
const productRoute = require("./src/routes/product-route");
const addressRoute = require("./src/routes/address-route");
const cartRoute = require("./src/routes/cart-route");
const orderRoute = require("./src/routes/order-route");
const paymentRoute = require("./src/routes/payment-route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Use routers
app.use("/users", userRoute);
app.use("/orders", orderRoute);
app.use("/carts", cartRoute);
app.use("/addresses", addressRoute);
app.use("/products", productRoute);
app.use("/payments", paymentRoute);
app.use("/auth", authRoute);

app.use(express.static("public"));

let port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server on Port :", port));
