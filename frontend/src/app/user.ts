import { PaymentInfo } from "./paymentInfo";

export class User{
firstName: String ="";
lastName: String = "";
userName: String = "";
email: String = "";
password: String = "";
password2: String = "";
age: String = "";
gender: String = "Male";
height: String = "";
weight: String = "";
medicalIssues: any[] = [];
selectedAllergies: any[] = [];
paymentInfo : PaymentInfo = new PaymentInfo();

constructor(){
}
}