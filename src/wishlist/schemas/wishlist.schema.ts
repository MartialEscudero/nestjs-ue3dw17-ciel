import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WishlistDocument = Wishlist & Document;

@Schema({ timestamps: true })
export class Wishlist {
  @Prop()
  userId: number;

  @Prop()
  url: string;

  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);