const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./config/MongoDb.js');
const importData = require('./dataImport.js');
const productRoute = require('./routers/productRouter.js');
const { errorHandler, notFound } = require('./middleware/error.js');
const userRoute = require('./routers/userRouter.js');
const paymentRoute = require('./routers/paymentRouter.js');


dotenv.config();
connectDatabase();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//api
app.use("/api/import", importData);
app.use("/api/products", productRoute);
app.use("/api/user", userRoute);
app.use("/api/payment", paymentRoute);

//error handler
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res)=> {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

//step 3 heroku

if(process.env.NODE_ENV === "production"){
    const path = require('path');
    app.use(express.static(path.join('client/build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, console.log("server running in port "+ PORT));
