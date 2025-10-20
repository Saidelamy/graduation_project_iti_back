import { Injectable } from '@nestjs/common';
import { CreateRepoDto } from './dto/create-repo.dto';
import { UpdateRepoDto } from './dto/update-repo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Repos } from './schemas/repos.schema';
import { Model } from 'mongoose';

@Injectable()
export class ReposService {

  constructor(@InjectModel(Repos.name) private repoModel: Model<Repos>) { }

  create(createRepoDto: CreateRepoDto) {
    return 'This action adds a new repo';
  }

  async findAll(): Promise<Repos[]> {
    return this.repoModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} repo`;
  }

  update(id: number, updateRepoDto: UpdateRepoDto) {
    return `This action updates a #${id} repo`;
  }

  remove(id: number) {
    return `This action removes a #${id} repo`;
  }
}
