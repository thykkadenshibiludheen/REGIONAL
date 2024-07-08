import orderModel  from'../models/orderModel.js'
 import userModel from'../models/userModel.js'
 import Stripe from 'stripe'

const stripe  = new Stripe(process.env.STRIP_SECERET_KEY)
 //placing user order for frontend
 const placeOrder = async(req,res)=>{
  
    try {
        const  newOrder = new orderModel({
            userId :req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address

        })

        await newOrder.save();
        await userModel.findByIdAndUpdate
    } catch (error) {
        
    }

    
 }


 export {placeOrder}