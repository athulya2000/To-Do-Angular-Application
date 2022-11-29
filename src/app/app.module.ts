import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAlltodoComponent } from './view-alltodo/view-alltodo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

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
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
