import { Component } from '@angular/core';
import { Banner } from './components/banner/banner';
import { FormNovaTransacao } from './components/form-nova-transacao/form-nova-transacao';
import { Transaction } from './models/transaction';

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  processarTransacao(transaction: Transaction) {
    console.log('transação criada');
    console.log('Objeto transmitido: ', transaction);
  }
}
