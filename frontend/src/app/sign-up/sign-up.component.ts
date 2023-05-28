import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [MessageService]
})
export class SignUpComponent implements OnInit {


  items: MenuItem[] = [];
  gfg: number = 0;

  constructor(public messageService: MessageService) {}

  ngOnInit() {
      this.items = [{
              label: 'Personal Info',
              routerLink: '/signUp/personal'
          },
          {
              label: 'General Info',
              routerLink: '/signUp/general'
          },
          {
              label: 'Medical Info',
              routerLink: '/signUp/medical'
          },
          {
              label: 'Payment Info',
              routerLink: '/signUp/payment'
          },
          {
              label: 'Confirmation',
              routerLink: '/signUp/confirmation'
          }
      ];

     
          // this.messageService.add({severity:'success', summary:'Order submitted', detail: 'Dear, your order completed.'});
   
  }

}
