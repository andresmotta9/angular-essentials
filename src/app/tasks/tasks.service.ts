import { Injectable } from "@angular/core";
import { NewTaskI } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all about Angular components, directives, services, and more.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build a Portfolio',
      summary: 'Create a personal portfolio website to showcase projects and skills.',
      dueDate: '2025-11-30',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Contribute to Open Source',
      summary: 'Find open source projects on GitHub and contribute to them.',
      dueDate: '2025-10-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskI, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasksToStorage();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasksToStorage();
  }

  private saveTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
