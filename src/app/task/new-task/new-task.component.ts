import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NewTaskData } from '../tasks/tasks.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // @Output() close = new EventEmitter<string>();

  @Output() cancle = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  enterdTitle = '';
  enterdSummary = '';
  enterdDate = '';

  // onClose() {
  //   this.close.emit();
  // }
  onCancle() {
    this.cancle.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enterdTitle,
      summary: this.enterdSummary,
      date: this.enterdDate,
    });
  }
}
