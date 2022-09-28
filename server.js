import express from "express"
import books from "./Data/Data.js"
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import BookRoute from "./Routes/BookRoute.js";
import AuthRoute from "./Routes/Auth.js";
import UsersRoute from "./Routes/UsersRoute.js";
import { errorHandler, notFound } from "./Middleware/Error.js";

dotenv.config();
 connectDatabase();

const app = express();

//API
app.use(express.json({ extended: false }));

app.use("/api/import",ImportData);
app.use("/api/books",BookRoute);
app.use('/users',UsersRoute );
app.use('/auth', AuthRoute);
// app.use(express.static("public"));
// app.use("/books", express.static("uploads/books"));

//ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

app.get("/",(req,res)=>{
    res.send("API IS RUNNING ...")
})
const PORT= process.env.PORT || 5000;
app.listen(PORT,console.log(`server run in port ${PORT}`))