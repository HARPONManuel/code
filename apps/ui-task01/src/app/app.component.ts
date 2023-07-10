import { Component } from '@angular/core';
import { LoginService } from './component/admin/services/login.service';

@Component({
  selector: 'task01-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public loginService: LoginService)
  {
  }

  onSearchClick()
  {
    console.log(this.loginService.currentUserName);
  }
}
