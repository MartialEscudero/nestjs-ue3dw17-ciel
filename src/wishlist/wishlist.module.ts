import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WishlistsController } from './wishlist.controller';
import { WishlistsService } from './wishlist.service';
import { Wishlist, WishlistSchema } from './schemas/wishlist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wishlist.name, schema: WishlistSchema }]),
  ],
  controllers: [WishlistsController],
  providers: [WishlistsService],
})
export class WishlistModule {}
