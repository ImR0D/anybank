import { Component, signal } from '@angular/core';
import { Banner } from './components/banner/banner';
import { FormNovaTransacao } from './components/form-nova-transacao/form-nova-transacao';

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('anybank');
}
