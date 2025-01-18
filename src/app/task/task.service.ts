import { Injectable } from '@angular/core';
import { NewTaskData } from './tasks/tasks.model';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private dummyTasks = [
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

  constructor() {
    const task = localStorage.getItem('task');

    if (task) {
      this.dummyTasks = JSON.parse(task);
    }
  }

  getUserTask(userId: string) {
    return this.dummyTasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.dummyTasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTask();
  }

  removeTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);
    this.saveTask();
  }

  private saveTask() {
    localStorage.setItem('task', JSON.stringify(this.dummyTasks));
  }
}
