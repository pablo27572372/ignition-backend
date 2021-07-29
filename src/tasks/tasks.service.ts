import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateTaskInput } from './dto/create-task.input';
import { FilterTaskInput } from './dto/filter-task.input';
import { SortTaskInput } from './dto/sort-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task, TaskDocument } from './schema/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name)
    private taskModel: Model<TaskDocument>,
  ) {}

  create(createTaskInput: CreateTaskInput, user: any) {
    const newTask = new this.taskModel({...createTaskInput, userId: user._id, created: new Date()});
    return newTask.save();
  }

  findAll(filter: FilterTaskInput | FilterQuery<Task>, sort: SortTaskInput = null) {
    return this.taskModel.find(filter).sort(sort).where({ parentId: null }).exec();
  }

  findAllByParentId(parentId: string) {
    return this.taskModel.find({ parentId: parentId }).exec();
  }

  findAllByUserId(userId) {
    return this.taskModel.find({ userId: userId }).exec();
  }

  findOne(id: string) {
    return this.taskModel.findOne({ _id: id }).exec();
  }

  update(updateTaskInput: UpdateTaskInput) {
    const data = {...updateTaskInput, updated: new Date()};
    return this.taskModel
      .findOneAndUpdate({ _id: updateTaskInput.id }, updateTaskInput, {
        upsert: false,
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.taskModel.deleteOne({ _id: id }).exec();
  }
}
