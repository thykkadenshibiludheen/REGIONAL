    import product from '../models/product.js'
    import productModel from '../models/product.js';
import fs from 'fs'

//add product item

const addProduct=async(req,res)=>{
let image_filename = `${req.file.filename}`;


const product = new productModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    stock:req.body.stock,
    image:image_filename
})
try {
    await product.save()
    res.json({success:true,message:"food Added"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:"error"})
}
}

// all product list
const listProduct  = async(req,res)=>{
    try {
        const product = await productModel.find({});
        res.json({success:true,data:product})
    
        
    } catch (error) {
        console.log(error);
        res.json( {success:false,message:"error"})  
    }

}

// remove product item

const removeProduct = async(req,res)=>{

    try {
        const  prodcut = await productModel.findById(req.body.id)
        fs.unlink(`uploads/${prodcut.image}`,()=>{})
        
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"product removed"})
    } catch (error) {
        
        console.log(error);
        res.json({sucess:false,message:"error"})
    }
}

const productEdit  = async (req,res)=>{
    try {      
        const { id, name, category, price, stock, description } = req.body;
        const image = req.file ? req.file.filename : null;
    
        const updateData = {
          name,
          category,
          price,
          stock,
          description,
        };
    
        if (image) {
          updateData.image = image;
        }
    
       const updatedProduct =  await productModel.findByIdAndUpdate(id, updateData);
       
    
        res.json({ success: true, message: 'Product has been updated' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

const singleProduct= async (req,res)=>{

try {
    const product = await productModel.findById(req.body.id)
    res.json({success:true,message:"product found",data:product})

    } catch (error) {
        res.json({success:false,message:"error",error})
        
    }
        
   
}



export{addProduct,listProduct,removeProduct,productEdit ,singleProduct} 