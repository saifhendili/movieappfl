import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './frontend/public/books');
    },
    filename: function (request, file, callback) {
        callback(null, "book" + Date.now() + path.extname(file.originalname));
    }
});
const upload=multer({storage:storage});

export {upload}