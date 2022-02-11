import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { TaskComponent } from './MyComponents/task/task.component';
import { ParentComponent } from './MyComponents/parent/parent.component';
import { ChildComponent } from './MyComponents/child/child.component';
import { TaskTwoComponent } from './MyComponents/task-two/task-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    ParentComponent,
    ChildComponent,
    TaskTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
