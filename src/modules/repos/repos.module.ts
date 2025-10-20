import { Module } from '@nestjs/common';
import { ReposService } from './repos.service';
import { ReposController } from './repos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Repos, ReposSchema } from './schemas/repos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Repos.name, schema: ReposSchema }])
  ],
  controllers: [ReposController],
  providers: [ReposService],
})
export class ReposModule { }
