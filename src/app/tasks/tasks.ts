import { Component, Input } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [
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

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
