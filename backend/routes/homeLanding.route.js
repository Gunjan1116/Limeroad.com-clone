const express=require("express");
const {Homepageproductmodel}=require("../models/homePageProduct.model");
const homeproductRoute=express.Router();


homeproductRoute.get("/",async(req,res)=>{
    try {
        const requiredData=await Homepageproductmodel.find();
        res.json(requiredData);
    } catch (error) {
        console.log(error);
        res.json(error.message)
    }
})

homeproductRoute.post("/add",async(req,res)=>{
    const data=req.body
    try {
       const sendingData=new Homepageproductmodel(data);
       await sendingData.save()
       res.json("Data add successfully!")
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
})

module.exports={
    homeproductRoute
}