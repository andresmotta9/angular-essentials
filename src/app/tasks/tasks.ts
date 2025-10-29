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

  onCompleteTask = (taskId: string) => {
    this.taskService.removeTask(taskId);
  }

  onStartAddTask = () => {
    this.isAddingTask = true;
  }

  onCancelAddTask = () => {
    this.isAddingTask = false;
  }

  onAddTask = (taskData: NewTaskI) => {
    this.taskService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}
