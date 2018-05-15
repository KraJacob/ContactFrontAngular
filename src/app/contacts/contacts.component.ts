import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import "rxjs/add/operator/map";
import { ContactService } from '../../services/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
pageContact:any;
  constructor(public http:Http,public constactService:ContactService) { }

  ngOnInit() {

        this.constactService.getContact()
        .subscribe(data=>{
          this.pageContact=data;
        },err=>{
          console.log(err);
        }
        )
  }

}
