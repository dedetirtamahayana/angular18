import { Component, Input, output } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './tasks/tasks.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [TasksComponent, NewTaskComponent],
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  newTask = [
    {
      id: 't5',
      userId: 'u5',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
  ];
  get selectedUserTask() {
    return this.taskService.getUserTask(this.userId);
  }

  // onAddTask(taskId: string) {
  //   const newTask = {
  //     id: taskId,
  //     userId: this.userId,
  //     title: 'New Task',
  //     summary: 'This is a dynamically added task.',
  //     dueDate: '2025-01-01',
  //   };

  //   this.dummyTasks.push(newTask);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  // onClose() {
  //   this.isAddingTask = false;
  // }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
