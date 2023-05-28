import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpInfoService } from '../sign-up-info.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
 
  
  constructor(public signUpInfoService: SignUpInfoService,private router: Router) {
   
   }

  ngOnInit(): void {
  }
  
}
