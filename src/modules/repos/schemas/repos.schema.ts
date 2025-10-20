import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Repos extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  company: string;

  @Prop()
  target: string;

  @Prop()
  status: string;

  @Prop()
  lastActivity: string;
}

export const ReposSchema = SchemaFactory.createForClass(Repos);
