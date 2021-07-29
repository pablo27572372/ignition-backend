import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { CreateTaskInput } from './dto/create-task.input';
import { FilterTaskInput } from './dto/filter-task.input';
import { SortTaskInput } from './dto/sort-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';
import { CommentsService} from '../comments/comments.service';
import { Comment } from '../comments/entities/comment.entity';
import { CurrentUser } from '../shared/decorators';
import { GqlAuthGuard } from '../shared/guards';

@Resolver(() => Task)
@UseGuards(GqlAuthGuard)
export class TasksResolver {
  constructor(
    private readonly tasksService: TasksService,
    private readonly commentsService: CommentsService
  ) {}

  @Mutation(() => Task)
  createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput, @CurrentUser() user: any) {
    return this.tasksService.create(createTaskInput, user);
  }

  @Query(() => [Task], { name: 'tasks' })
  findAll(@Args('filter', { nullable: true }) filter: FilterTaskInput, @Args('sort', { nullable: true }) sort: SortTaskInput) {
    return this.tasksService.findAll(filter, sort);
  }

  @Query(() => Task, { name: 'task' })
  findOne(@Args('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Mutation(() => Task)
  updateTask(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput) {
    return this.tasksService.update(updateTaskInput);
  }

  @Mutation(() => Task)
  removeTask(@Args('id') id: string) {
    return this.tasksService.remove(id);
  }

  @ResolveField('subTasks', () => [Task])
  getSubTasks(@Parent() task) {
    const { id } = task;
    return this.tasksService.findAllByParentId(id);
  }

  @ResolveField('comments', () => [Comment])
  getComments(@Parent() task) {
    const { id } = task;
    return this.commentsService.findAllByTaskId(id);
  }
}
