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
@Input() name?: string;
}
