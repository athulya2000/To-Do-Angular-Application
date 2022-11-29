import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-alltodo',
  templateUrl: './view-alltodo.component.html',
  styleUrls: ['./view-alltodo.component.css']
})
export class ViewAlltodoComponent {
  constructor(private api:ApiService)
  {
    api.fetchTodo().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }


  data:any=[]   
  }



