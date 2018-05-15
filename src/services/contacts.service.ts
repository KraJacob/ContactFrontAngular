import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ContactService{

  constructor(public http:Http){

  }
   getContact(){
     return this.http.get("http://localhost:8080/chercherContact?mc=k&size=5&page=0")
     .map(resp=>resp.json())
   }
}
