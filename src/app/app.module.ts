import { ContactService } from './../services/contacts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule}  from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component'

// routage de l'application
 const appRout:Routes=[
   { path:'about', component: AboutComponent},
   { path:'contacts', component: ContactsComponent},
   { path:'new-contact', component: NewContactComponent},
   { path:'', redirectTo:'/about', pathMatch:'full'}
 ];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRout), HttpModule, FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
