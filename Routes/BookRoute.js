import asyncHandler from "express-async-handler";
import express from "express";
import Book from "../Models/BookModel.js";
import {upload} from "../Middleware/books.storage.js";
import {auth} from "../Middleware/auth.js";



const BookRoute = express.Router();

BookRoute.put('/accept/:id',auth, async (req, res) => {
  try {
const book=await Book.findById(req.params.id)
book.state=true  
    await book.save(); 
    const books = await Book.find();     
    // const books = await Book.find({state:false});     

    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
BookRoute.get('/language',async (req, res) => {
  try {
      const data = await Book.find().select('language').distinct('language')
      res.json(data)
  } catch (error) {
      res.json(error)
  }
})


  BookRoute.post("/",upload.fields([{name: "cover", maxCount: 1,}, {name: "pdf", maxCount: 1,},]),auth, async (req, res) => {
    const {title,rating, author,language} = req.body;
    let book = await new Book({
        title,
        rating,
        author,
        language,
        poster: req.files.cover[0].filename,
        pdf: req.files.pdf[0].filename,
        user:req.user.id  

}).save();



    return res.send({message: "Book added successfully", book});
});
BookRoute.get("/", async (req, res) => {
  res.send({books: await Book.find()});
});

BookRoute.get("/:bookId", async (req, res) => {
  try {
      const book = await Book.findById(req.params.bookId)

      res.status(200).json({
          book,
      });
  } catch (err) {
      res.status(500);
  }
});
export default BookRoute;