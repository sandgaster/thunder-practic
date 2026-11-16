import { student } from "../model/studentSchema.js";
import jwt from "jsonwebtoken"
import cookies from "cookie-parser"

export  const signup = async (req, res )=>{

    //singup
    try{
        const {name , age , email , password} = await student.create(req.body);

        // res.json(name , age , email , password)

        //create jwt token 

        const token = jwt.sign(
            {name :name,
             age:age,
             email:email 
            },
            "4516871dfdg",
            {expiresIn:"1d"}
        );

        res.cookie("token", token, {
        httpOnly: true,
        secure: false
        });

        return res.status(201).json({
        message: "Signup successful"
        });

    }catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }

}

//verfiy //user 
export const user = async (req, res )=>{

    //singup
    try{
        //create jwt token 

        const {token} = req.cookies
        const verify1 = jwt.verify(token , "4516871dfdg")

        const u = await student.findone({email:verify1.email})

        res.json({
            success: true,
            data: u
        });

    }catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }

}


//login
export  const login = async (req, res )=>{
        try{
        const { email , password} = req.body;

        // find student 

        const u = await student.find({email : email})

        if (!u) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        
            if(password ==u.password){

            const token = jwt.sign(
            { email: user.email },
            "4516871dfdg",
            { expiresIn: "1d" }
            );

           res.cookie("token", token, {
            httpOnly: true,
            secure: false
            });

            return res.json({
            message: "Login successful"
            });
                
            }

            return res.status(401).json({
            message: "Invalid password"
        });
        

        

        

    }catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }

}
