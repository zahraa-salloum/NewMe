import { Component, OnInit } from '@angular/core';
import { SignUpInfoService } from '../sign-up-info.service';

@Component({
  selector: 'app-confirmation-info',
  templateUrl: './confirmation-info.component.html',
  styleUrls: ['./confirmation-info.component.css']
})
export class ConfirmationInfoComponent implements OnInit {

  constructor(public signUpInfoService: SignUpInfoService) { }

  ngOnInit(): void {
  }

}
