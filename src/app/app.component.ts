import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  name = 'Satyabrat Kumar Mishra';

  getValue() {
    return "Get function data"
  };

  userData: any = {};

  getData(data: NgForm) {
    console.log(data);
    this.userData = data;
  };

  display = false;
  toggle() {
    this.display = !this.display;
  };

  todoList: any[] = [];
  addTask(item: string) {
    this.todoList.push({id:this.todoList.length, name: item})
    console.log(this.todoList);
  };

  removeTask(id:number){
    this.todoList=this.todoList.filter(item => item.id!==id)
  };
}
