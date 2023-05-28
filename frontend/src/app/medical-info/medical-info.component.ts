import { Component, OnInit } from '@angular/core';
import { SignUpInfoService } from '../sign-up-info.service';

@Component({
  selector: 'app-medical-info',
  templateUrl: './medical-info.component.html',
  styleUrls: ['./medical-info.component.css']
})
export class MedicalInfoComponent implements OnInit {
  

  allergies: any[];

   

    
    
   
    constructor(public signUpInfoService: SignUpInfoService) {
        this.allergies = [

            {name: 'Milk', code: 'MIL'},
            {name: 'Egg', code: 'EGG'},
            {name: 'Peanuts', code: 'PEA'},
            {name: 'Tree nuts', code: 'TRE'},
            {name: 'Sesame', code: 'SEA'},
            {name: 'Soy', code: 'SOY'},
            {name: 'Fish', code: 'FIS'},
            {name: 'Shellfish', code: 'SHE'},
            {name: 'Wheat', code: 'WHE'},
            {name: 'Triticale', code: 'TRI'},
            {name: 'Celery', code: 'CEL'},
            {name: 'Carrot', code: 'CAR'},  
            {name: 'Avocadoo', code: 'AVO'},
            {name: 'Bell pepper', code: 'BEL'},
            {name: 'Potato', code: 'POT'},
            {name: 'Pumpkin', code: 'PUM'},
            {name: 'Mushroom', code: 'MUS'},
            {name: 'Onion', code: 'ONI'},
            {name: 'Mustard', code: 'MUS'},
            {name: ' Spices', code: 'SPI'}
        ];
        
        
        
       
        
        
        
        
        
        
        
      
    }





  ngOnInit(): void {
  }

}
/*

 









*/