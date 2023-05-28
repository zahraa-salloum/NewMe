import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpInfoService } from '../sign-up-info.service';

NgModel
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit{

  submitted: boolean = false;
  passwordMatch: boolean =false;

  constructor(public signUpInfoService: SignUpInfoService,private router: Router) { 
  
  }


  ngOnInit(): void {

  }

submittedMeth(){
  if(this.signUpInfoService.user.firstName.length !=0 &&
    this.signUpInfoService.user.lastName.length !=0  &&
    this.signUpInfoService.user.email.length !=0 &&
    this.signUpInfoService.user.userName.length !=0 &&
    this.signUpInfoService.user.password.length !=0 &&
    this.signUpInfoService.user.password2.length !=0) {
      if(this.signUpInfoService.user.password === this.signUpInfoService.user.password2){
        window.scrollTo(0,0);
        this.router.navigate(['/signUp/general']);
      }else{
        this.passwordMatch =true;
      }
     
    }
    this.submitted =true;
}
}
