import { Component } from '@angular/core';
import { User } from './interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Auto Catalog';

  ngOnInit(): void {
    this.isLogged = !!localStorage.getItem('logged')
  }

  user: User = {
    login: '',
    password: '',
  };

  isLogged: boolean;

  onLogin(): void {
    localStorage.setItem('logged', 'true')
  }
}
