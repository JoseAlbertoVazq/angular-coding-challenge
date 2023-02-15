import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../../interfaces/todo.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  isCompleted: boolean = false;
  @Input() todo: TodoInterface;
  @Output() sendEditAction = new EventEmitter<TodoInterface>();
  @Output() sendRemoveAction = new EventEmitter<TodoInterface>();
  constructor() {}

  ngOnInit() {}

  changeStatus() {
    this.todo.isDone = !this.todo.isDone;
  }
  removeTodo() {
    this.sendRemoveAction.emit(this.todo);
  }

  editTodo() {
    this.sendEditAction.emit(this.todo);
  }
}
