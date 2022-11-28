import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  userId=""
  id=""
  titile=""
  completed=""


  readValues=()=>
  {
    let data:any={"userId":this.userId,"id":this.id,"titile":this.titile,"completed":this.completed}
    console.log(data)
  }
}
