import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    TodosComponent,
    TodoComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
