import { Component, Input, Output } from '@angular/core';
import { Task } from './task/task';
import { NewTaskI, TaskI } from './task/task.model';
import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private taskService: TasksService) {
    this.taskService = taskService;
  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask = () => {
    this.isAddingTask = true;
  }

  onCloseAddTask = () => {
    this.isAddingTask = false;
  }
}
