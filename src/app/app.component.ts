import { Component } from '@angular/core';
import { User } from './interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Auto Catalog';

  user: User = {
    login: '',
    password: '',
  };

  onLogin(): void {
    localStorage.setItem('user', JSON.stringify(this.user))
  }
}
