import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
// import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist, WishlistDocument } from './schemas/wishlist.schema';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectModel(Wishlist.name) private wishlistModel: Model<WishlistDocument>
  ) {}

  async createWishlist(createWishlistDto: CreateWishlistDto): Promise<Wishlist> {
    const createdWishlist = new this.wishlistModel(createWishlistDto);
    return createdWishlist.save();
  }

  async findAll(): Promise<Wishlist[]> {
    return this.wishlistModel.find().exec();
  }

  async findOne(id: string) {
    const wishlist = await this.wishlistModel.findById(id);
    return { wishlist };
  }

  async removeWishlist(id: string) {
    const { wishlist } = await this.findOne(id);
    await wishlist.remove();
  }
}
