import { Component, computed, signal } from '@angular/core';
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
  transactions = signal<Transaction[]>([]);

  saldo = computed(() => {
    return this.transactions().reduce((acc, currentTransaction) => {
      let transactionValue = 0;
      if (currentTransaction.tipo == 'saque') {
        transactionValue = -currentTransaction.valor;
      } else if (currentTransaction.tipo == 'deposito') {
        transactionValue = currentTransaction.valor;
      }

      return acc + transactionValue;
    }, 0);
  });

  processarTransacao(transaction: Transaction) {
    this.transactions.update((listTransactions) => [transaction, ...listTransactions]);
    console.log(this.transactions());
  }
}
