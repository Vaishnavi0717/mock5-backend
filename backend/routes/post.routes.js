const express=require("express");
const {contactModel} =require("../model/post.model");

const contactRouter=express.Router();





contactRouter.post("/create", async(req,res)=>{
const { }=req.body;
    try {
        const contact=new contactModel(req.body);
        await contact.save();
        res.status(200).send({"msg":"A new contact has been added"})
    } catch (error) {
        res.status(400).send({"error":"Error Occured while adding the contact"})
    }
})



contactRouter.get("/", async(req,res)=>{
    try {
        const contact=await contactModel.find({name:req.body.name});
        res.status(200).send(contact)
    } catch (error) {
        res.status(400).send(error)
    }
})



contactRouter.patch("update/:contactId", async(req, res)=>{
    const {contactId}= req.params;
    const contact= await contactModel.findOne({_id:contactId});
    try {
        if(req.body.name===contact.name){
            await contactModel.findByIdAndUpdate({_id:contactId}, req.body);
            res.status(200).send({"msg":`The note with ${contactId} has been updated`})
        }

    } catch (error) {
        res.status(400).send({"error":"error"})
    }
})



contactRouter.delete("delete/:contactId", async(req, res)=>{
    const {contactId}= req.params;
    const contact= await contactModel.findOne({_id:contactId});
    try {
        if(req.body.name===contact.name){
            await contactModel.findByIdAndDelete({_id:contactId});
            res.status(200).send({"msg":`The note with ${contactId} has been deleted`})
        }

    } catch (error) {
        res.status(400).send({"error":"error"})
    }
})


module.exports={
    contactRouter
}