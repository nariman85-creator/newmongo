import PostMessage from '../models/PostMessage.js';
import mongoose from 'mongoose';

export const getPosts=async(req,res)=>{
    try {
        const postMessages=await PostMessage.find();
        res.status(200).json(postMessages);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }

}
export const createPost=async(req,res)=>{
    const post=req.body;
    const newPost=new PostMessage(post);
try {
    await newPost.save();
    res.status(201).json(newPost);
} catch (error) {
    res.status(409).json({message:error.message});
}
};
export const updatePost=async(req,res)=>{
 const {id:_id}=req.params;
 const post=req.body;
 if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('nop post po _id');
 const update=await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
 res.json(update);
};
export const deletePost=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with id');
    await PostMessage.findByIdAndDelete(id);
    res.json({message:'Post deleted succesfulle'});
};
export const likePost=async(req,res)=>{
    const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with id');
       const post=await PostMessage.findById(id);
       const updatePost=await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});
       res.json(updatePost);
}