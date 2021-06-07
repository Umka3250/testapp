import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SingInService } from './components/services/sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isLoggedIn = false;

  constructor(private logInService: SingInService, private translateService: TranslateService, private router: Router) { }

  ngOnInit() {
    this.userSub = this.logInService.user.subscribe(user => {
      this.isLoggedIn = !!user;
    });

    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  onChangeLanguage(lang: string) {
    this.translateService.use(lang)
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
