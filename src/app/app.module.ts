import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAlltodoComponent } from './view-alltodo/view-alltodo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddTodoComponent
  },
  {
    path:"view",
    component:ViewAlltodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ViewAlltodoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
