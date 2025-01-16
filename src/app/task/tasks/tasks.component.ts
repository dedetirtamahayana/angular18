import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from '../task.component';
import { Task } from './tasks.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();
  @Output() add = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }

  onAddTask() {
    this.add.emit(this.task.id);
  }
}
