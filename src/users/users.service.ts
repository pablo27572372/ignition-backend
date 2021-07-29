import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './schema/user.schema';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  create(createUserInput: CreateUserInput) {
    const newUser = new this.userModel(createUserInput);
    return newUser.save();
  }

  findAll() {
    return this.userModel.find({}).exec();
  }

  findOne(id: string) {
    return this.userModel.findOne({ _id: id }).exec();
  }

  findByUserName(username: string) {
    return this.userModel.findOne({ username: username }).exec();
  }

  update(updateUserInput: UpdateUserInput) {
    return this.userModel
      .findOneAndUpdate({ _id: updateUserInput.id }, updateUserInput, {
        upsert: false,
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id }).exec();
  }
}
