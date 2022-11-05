const express = require('express');
const User = require('./models/userModel.js');
const users = require('./frictionData/users.js');
const Product = require('./models/productModel.js');
const products = require('./frictionData/products.js');
const asyncHandler = require('express-async-handler');

const importData = express.Router();

importData.post("/user", 
    asyncHandler(async (req, res)=>{
        await User.deleteMany({});
        const importUser = await User.insertMany(users);
        res.send({importUser});
    })
);

importData.post("/products", 
    asyncHandler(async (req, res)=>{
        await Product.deleteMany({});
        const importProduct = await Product.insertMany(products);
        res.send({importProduct});
    })
);

export default importData;