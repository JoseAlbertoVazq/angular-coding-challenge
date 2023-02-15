import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../interfaces/todo.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todoList: TodoInterface[] = [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      text: [''],
    });
  }

  createTodo(text: string) {
    this.todoList.push({ name: text, isDone: false, id: this.idGeneration() });
    this.form.reset();
  }

  removeTodo(event: TodoInterface) {
    this.todoList.splice(this.todoList.indexOf(event), 1);
  }

  idGeneration(): String {
    const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const ID_LENGTH = 7;
    let id = '';
    for (let i = 0; i < ID_LENGTH; i++) {
      id += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return id;
  }
}
