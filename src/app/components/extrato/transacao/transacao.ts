import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Transaction, TransactionType } from '../../../models/transaction';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.html',
  styleUrl: './transacao.css',
})
export class Transacao {
  transactionItem = input.required<Transaction>();
  valorPorTipoTransacao = computed(() => {
    if (this.transactionItem().tipo == TransactionType.Saque) {
      return this.transactionItem().valor * -1;
    }
    return this.transactionItem().valor;
  });
}
