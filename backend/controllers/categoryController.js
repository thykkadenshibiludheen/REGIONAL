import categoryModel from '../models/categoryModel.js';
import fs  from 'fs'

const addCategory = async (req, res) => {

  let image_filename = `${req.file.filename}`
 
 
  const category = new categoryModel({
    category: req.body.category,
    image:image_filename
  });

  try {
  
    await category.save();
    res.json({ success: true, message: 'Category has been added' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error});      
  }
};

const deleteCategory = async (req, res) => {
  try {

    const category  = await categoryModel.findById(req.params.id)
    fs.unlink(`uploadCategory
    /${category.image}`,()=>{})
    await categoryModel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Category has been removed' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Error' });
  }
};
const listCategory = async(req,res)=>{
  try {

  const category =   await categoryModel.find({})
    res.json({success:true,data:category})
  } catch (error) {
    res.json({success:false,message:"error"})
  }
}

export { addCategory, deleteCategory,listCategory };
