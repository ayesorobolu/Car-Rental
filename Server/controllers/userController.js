import User from "../models/User.js"
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password || password.length < 8){
            return res.json({success: false, message:"fill in all fields"})
        }

        const userExists = await User.findOne({email}) 
        if(userExists){
            return res.json({success: false, message:"User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password: hashedPassword})
    } catch (error) {
        
    }
}