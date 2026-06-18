import { Component, computed, signal } from '@angular/core';
import { Banner } from './components/banner/banner';
import { FormNovaTransacao } from './components/form-nova-transacao/form-nova-transacao';
import { Transaction, TransactionType } from './models/transaction';

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  transactions = signal<Transaction[]>([]);

  computeTransaction = {
    [TransactionType.Deposito]: (valor) => valor,
    [TransactionType.Saque]: (valor) => -valor,
  } satisfies Record<TransactionType, (valor: number) => number>;

  saldo = computed(() => {
    return this.transactions().reduce((acc, currentTransaction) => {
      const calcularTransacao = this.computeTransaction[currentTransaction.tipo];
      return acc + calcularTransacao(currentTransaction.valor);
    }, 0);
  });

  processarTransacao(transaction: Transaction) {
    this.transactions.update((listTransactions) => [transaction, ...listTransactions]);
  }
}
