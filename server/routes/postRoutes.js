import express, { Router } from 'express';
import * as dotenv from 'dotenv';

import Post from '../mongodb/models/post.js';
import { v2 as cloudinary } from 'cloudinary';


dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


// get all posts;
router.route('/').get(async(req,res)=>{
    try{
        const post = await Post.find();
        res.status(200).json({success: true, data: post})
    }catch(error){
        console.log(error.message);
        res.status(500).json({success: false, message:'fetch faild'})
    }

});

router.route('/').post(async (req, res) => {
    try {
        console.log('db updated');

      const { name, prompt, photo } = req.body;

    //    const photoUrl =  await cloudinary.uploader.upload(photo);
    //     console.log ( photoUrl);

      const newPost = await Post.create({
        name,
        prompt,
         photo: "https://images.template.net/wp-content/uploads/2016/04/27090026/Car-Wallpaper1.jpg",
      });
 
      res.status(200).json({ success: true, data: newPost });
    } catch (err) {
        console.log('error found');
        console.log(err.message);
      res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
  });

export default router;