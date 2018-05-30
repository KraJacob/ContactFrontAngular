import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactService} from "../../services/contacts.service";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
//creation d'un objet de type Contact
  mode=1
  contact:Contact=new Contact();
  constructor(public contactService:ContactService) { }

  ngOnInit() {
  }

  saveContact(){
    this.contactService.save(this.contact)
      .subscribe(data=>{
       this.contact=data
        this.mode=2
      },err=>{
        console.log(err)
      })
  }
}
