///<reference path="../../node_modules/rxjs/add/operator/map.d.ts"/>
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {Contact} from "../model/contact";

@Injectable()
export class ContactService{

  constructor(public http:Http){

  }
   getContact(motCle:String="",size:number=5, page:number=0){
     return this.http.get("http://localhost:8080/chercherContact?mc="+motCle+"&size="+size+"&page="+page)
     .map(resp=>resp.json())
   }

  save(contact:Contact){
    return this.http.post("http://localhost:8080/contacts",contact)
      .map(resp=>resp.json())
  }
}
