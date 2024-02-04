import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,UserComponent,UserService,BrowserModule,AppComponent
    ,FormsModule,BrowserAnimationsModule
  ],
  providers: [UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
