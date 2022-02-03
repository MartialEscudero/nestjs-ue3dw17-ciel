import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { WishlistsService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
// import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist } from './schemas/wishlist.schema';

@Controller('api')
export class WishlistsController {
    constructor(private readonly wishlistService: WishlistsService) { }

    @Post('wishlist')
    async createWishlist(@Body() createWishlistDto: CreateWishlistDto) {
      await this.wishlistService.createWishlist(createWishlistDto);
    }

    @Get('wishlist')
    async findAll(): Promise<Wishlist[]> {
      return this.wishlistService.findAll();
    }

    @Get('wishlist/:id')
    findOne(@Param('id') id: string) {
      return this.wishlistService.findOne(id);
    }

    @Delete('wishlist')
    removeWishlist(@Body('id') id : string) {
      return this.wishlistService.removeWishlist(id);
    }
}
