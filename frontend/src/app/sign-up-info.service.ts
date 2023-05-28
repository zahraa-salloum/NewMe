import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SignUpInfoService {
//  user: any = {
//   firstName: "",
//   lastName: "",
//   userName: "",
//   email:  "",
//   password: "",
//   password2: "",
//   age:  "",
//   gender:  "Male",
//   height:  "",
//   weight:  "",
//   paymentInfo:{
//     cardHolderName: "",
//     number: "",
//     date:  "",  
//     Cvv: ""
//   }};
user: User = new User();


  selectedDiseases: any[] | undefined;
  



  constructor() { }
}
