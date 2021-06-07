import { Component } from '@angular/core';
import { SingInService } from '../services/sign-in.service';

@Component({
  selector: 'app-cv',
  templateUrl: 'cv.component.html',
  styleUrls: ['cv.component.scss']
})
export class CvComponent {
  constructor(private logInService: SingInService) { }
  pdfSource = "~/assets/Serhii_Naumenko.pdf";

  onSignOut() {
    this.logInService.signOut();
  }
}
