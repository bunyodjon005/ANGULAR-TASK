// import { Component } from '@angular/core';

// import {MatTableModule} from '@angular/material/table'
// import { TodoClass } from '../Todo';
// @Component({
//   selector: 'app-categories',
//   templateUrl: './categories.component.html',
//   styleUrls: ['./categories.component.scss']
// })
// export class CategoriesComponent {

// todos:TodoClass[]=[];
// newTodo!:string;

// constructor(public todoss:TodoClass){

// }
// saveTodo(){
//   if(this.newTodo){
// let todo= new TodoClass();
// todo.name=this.newTodo;
// todo.isCompleted=true;
// this.todos.push(todo);
// this.newTodo=``;
//   }
//   else {
//     alert('New Todo')
//   }
// }
// done(id:number){
//   this.todos[id].isCompleted=!this.todos[id].isCompleted;
// }
// }
import { Component } from '@angular/core';
import { TodoClass } from '../Todo';
// TodoClass ni Todo ga o'zgartiring

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  todos: TodoClass[] = []; // TodoClass ni Todo ga o'zgartiring
  newTodo!: string;

  constructor() {} // TodoClass bu yerda injekt qilinmaydi, shuning uchun uni constructor ichida ishlatishni olib tashlang

  saveTodo() {
    if (this.newTodo) {
      let todo = new TodoClass(); // TodoClass ni Todo ga o'zgartiring
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('New Todo');
    }
  }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }
  remove(id:number){
this.todos =this.todos.filter((v,i)=>i !== id);
  }
}
