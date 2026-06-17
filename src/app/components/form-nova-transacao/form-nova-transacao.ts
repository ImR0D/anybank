import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css',
})
export class FormNovaTransacao {
  valorTransacao = '00,00';
  transactionType = '';

  realizarTransacao() {
    console.log('Transação em andamento...');
    console.log('Selected Transaction Type: ', this.transactionType);
    console.log('Valor: ', this.valorTransacao);
    this.valorTransacao = '';
    this.transactionType = '';
  }
}
