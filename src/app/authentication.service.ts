import { Injectable } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private Logeddin=false;
ApiLogin(email:string,password:string):boolean{
if(this.apiserivce){
  this.Logeddin=true;
  return true;
}else {
return false;
}
}
saveToken(apiservice:string){
localStorage.setItem('auth_token',apiservice)
}
logout():void{
this.Logeddin=false;
}
isLoggedin():boolean{
  return this.Logeddin
}

isAdmin():boolean{
  return this.Logeddin;
}
  constructor(private apiserivce:ApiserviceService) { }
}
