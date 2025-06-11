import { Inject, Injectable } from '@nestjs/common';
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor(@Inject('CLOUDINARY') private cloudinary) {}

  async uploadImage(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = this.cloudinary.uploader.upload_stream(
        { 
          folder: 'user-avatars',
          resource_type: 'auto'
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result.secure_url);
        },
      );
      uploadStream.end(file.buffer);
    });
  }
}