import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AISIW';
  constructor() {
    window.electronAPI.testEvent(this.title)
  }
}
