import mongoose from'mongoose'
 export const connectDB = async()=>{
    (await mongoose.connect('mongodb+srv://shibilu2003:shibilu%402003@cluster0.j1ahh2z.mongodb.net/RMC').then(()=>console.log("database connectd")))
}