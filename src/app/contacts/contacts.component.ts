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

motCle:String="";
page:number=0;
size:number=5;
nbrePage:Array<number>
  constructor(public http:Http,public constactService:ContactService) { }

  ngOnInit() {


  }

  doSearch(){
    this.constactService.getContact(this.motCle,this.size,this.page)
        .subscribe(data=>{
          this.pageContact=data;
          this.nbrePage= new Array(data.totalPages)
        },err=>{
          console.log(err);
        }
        )

  }

  chercher(){
    this.doSearch();
  }

  gotoPage(i:number){
   this.page=i;
   this.doSearch();
  }

}
