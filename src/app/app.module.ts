import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {      
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatDatepicker,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MaterialangularReactiveformComponent } from './materialangular-reactiveform/materialangular-reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MaterialangularReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule  
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
