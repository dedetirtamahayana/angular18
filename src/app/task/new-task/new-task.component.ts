import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NewTaskData } from '../tasks/tasks.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // @Output() close = new EventEmitter<string>();
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enterdTitle = '';
  enterdSummary = '';
  enterdDate = '';
  private taskService = inject(TaskService);

  // onClose() {
  //   this.close.emit();
  // }
  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enterdTitle,
        summary: this.enterdSummary,
        date: this.enterdDate,
      },
      this.userId
    );
    this.onClose();
  }
}
