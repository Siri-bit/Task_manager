import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  tasks: any[] = [];

  newTask = {
  title: '',
  description: '',
   

  done: false
};

  editingId = '';
editingTitle = '';
editingDescription = '';

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (data: any) => {
        this.tasks = data;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }

  addTask() {
    if (!this.newTask.title) return;

    this.taskService.createTask(this.newTask).subscribe(() => {
      this.newTask = {
  title: '',
  description: '',
  
  done: false
};
      this.loadTasks();
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
  editTask(task: any) {
  this.editingId = task._id;
  this.editingTitle = task.title;
  this.editingDescription = task.description;
}

saveTask() {
  this.taskService.updateTask(this.editingId, {
    title: this.editingTitle,
    description: this.editingDescription
  }).subscribe(() => {

    this.editingId = '';
    this.editingTitle = '';
    this.editingDescription = '';

    this.loadTasks();

  });
}

get completedCount(): number {
  return this.tasks.filter(task => task.done).length;
}

get pendingCount(): number {
  return this.tasks.filter(task => !task.done).length;
}

toggleDone(task: any) {
  this.taskService.updateTask(task._id, {
    done: !task.done
  }).subscribe(() => {
    this.loadTasks();
  });
}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}