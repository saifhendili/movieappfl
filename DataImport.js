import  express  from "express";
import User from "./Models/UserModel.js";
import users from "./Data/User.js";
import Book from "./Models/BookModel.js";
import books from "./Data/Data.js";
import asyncHandler from "express-async-handler"





const ImportData=express.Router();

ImportData.post("/user", asyncHandler( async(req,res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({importUser});

}));

ImportData.post("/books", asyncHandler ( async(req,res) => {
    await Book.remove({});
    const importBooks = await Book.insertMany(books);
    res.send({importBooks});

}));
export default ImportData;