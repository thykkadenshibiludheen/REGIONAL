import express from 'express';
import { addCategory, deleteCategory, listCategory } from '../controllers/categoryController.js';
import multer from 'multer';

const categoryRoute = express.Router();

const storage = multer.diskStorage({     
    destination : 'uploadCategory',
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
}) 

const upload = multer ({storage:storage})
 

categoryRoute.post('/add',  upload.single('categoryImage'),addCategory);
categoryRoute.delete('/delete/:id', deleteCategory);
categoryRoute.get('/list',listCategory)

export default categoryRoute;
