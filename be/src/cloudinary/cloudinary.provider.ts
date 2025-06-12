import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: (configService: ConfigService) => {
    cloudinary.config({
      cloud_name: 'dlpgxvzpb',
      api_key: '247446665149663',
      api_secret: 'y1qxNtPThDmdadKXVQ18gJzggJY',
    });
    return cloudinary;
  },
  inject: [ConfigService],
};
