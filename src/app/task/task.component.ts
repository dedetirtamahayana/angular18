import { Component, Input, output } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './tasks/tasks.model';

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
  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

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
    return this.dummyTasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);
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

  onCancleAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskData) {
    this.dummyTasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
}
