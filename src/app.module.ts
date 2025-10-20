import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReposModule } from './modules/repos/repos.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://saidmagdy511_db_user:WPUMAvGsTYfOIqS6@cluster0.dkcpsk.mongodb.net/Cash'
    ),
    ReposModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
