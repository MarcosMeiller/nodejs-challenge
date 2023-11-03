import {v2 as cloudinary} from 'cloudinary';

  cloudinary.config({
    cloud_name: "drj8oyqih",
    api_key: "984773414612563",
    api_secret: process.env.api_secret,
    secure: true
  })
export async function uploadImage(filePath){
    return await cloudinary.uploader.upload(filePath,{
        folder: 'userImage'
    })
}
