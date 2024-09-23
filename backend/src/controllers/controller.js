import contacts from "../contacts.json" assert { type: 'json' };
import {asyncHandler} from "../utils/asyncHandler.js";

export const getAllContacts = asyncHandler(async (req, res) => {
    res.status(200).json({success:true,data:contacts});
});

export const getContactById = asyncHandler(async(req,res)=>{
    const contactId = parseInt(req.params.id,10);
    const contact = contacts.find(contact=> contact.id===contactId);

    if(contact){
        res.status(200).json({success:true,data:contact});
    }else{
        res.status(400).json({success:false,message:"contact not found"});
    }
})

