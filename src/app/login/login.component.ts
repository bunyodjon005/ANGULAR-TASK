import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { AuthenticationService } from '../authentication.service';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  EmailId:string='';
  Password:string='';
  constructor(private http: HttpClient, private router: Router , private apiservice:ApiserviceService , private authentication:AuthenticationService) {

  
  }

  Onlogin():void{
if(this.EmailId,this.Password){
  if(this.authentication.ApiLogin(this.EmailId,this.Password)){
    console.log("Tizimga kirdi");
    this.router.navigate(['/dashboard'])
    
  } else {
    console.log("xatolik");
    
  }
}
console.log(this.EmailId);
console.log(this.Password);


  }
}
