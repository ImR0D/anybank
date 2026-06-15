import { Component, signal } from '@angular/core';
import { Banner } from './components/banner/banner';

@Component({
  selector: 'app-root',
  imports: [Banner],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('anybank');
}
