import express from "express"
import { addProduct ,listProduct,productEdit,removeProduct, singleProduct} from "../controllers/productController.js"
import multer from "multer"


const productRouter  =  express.Router()


//image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
   filename:(req,file,cb)=>{
    return  cb(null,`${Date.now()}${file.originalname}`)
   }
})
const upload  = multer({storage:storage})

productRouter.post("/add", upload.single("image"),addProduct)
productRouter.get('/list',listProduct)
productRouter.post('/remove',removeProduct)
productRouter.post('/update', upload.single("image"),productEdit)
productRouter.get('/single-product',singleProduct)
export default  productRouter;