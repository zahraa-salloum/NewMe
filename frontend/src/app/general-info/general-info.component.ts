import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpInfoService } from '../sign-up-info.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

submitted: boolean = false;
  constructor(public signUpInfoService: SignUpInfoService,private router: Router) { 

  }
  ngOnInit(): void {

  }
  submittedMeth(){
    if(this.signUpInfoService.user.age.length !=0 &&
      this.signUpInfoService.user.height.length !=0  &&
      this.signUpInfoService.user.weight.length !=0
      ) {
        
        this.router.navigate(['/signUp/medical']);
      }
      this.submitted =true;
  }
  
}
