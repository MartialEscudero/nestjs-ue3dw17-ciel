require('dotenv').config()

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WishlistModule } from './wishlist/wishlist.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://'
      + process.env.MONGO_USER + ':'
      + process.env.MONGO_PASSWORD + '@'
      + process.env.MONGO_CLUSTER + '.mongodb.net/'
      + process.env.MONGO_DATABASE_NAME + '?retryWrites=true&w=majority'
    ),
    WishlistModule
  ]
})
export class AppModule {}