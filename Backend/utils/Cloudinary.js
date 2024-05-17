// following an approach. we don't upload file directly to cloudinary 
// first to local server with help of multer and then local server to cloudinary server... (as followed in industry)
// in fs we "unlink" instead of "delete"

import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import { config } from 'dotenv';
config({path : "../config/config.env"});

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME, 
    api_key: process.env.CLOUDINARY_CLIENT_API, 
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET
});
