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
  processedTransaction = signal<Transaction | undefined>(undefined);

  constructor() {
    this.processedTransaction.set(undefined);
  }

  computeTransaction = {
    [TransactionType.Deposito]: (valor) => {
      return valor;
    },
    [TransactionType.Saque]: (valor) => {
      return -valor;
    },
  } satisfies Record<TransactionType, (valor: number) => number>;

  private isValidTransaction(t: Transaction): boolean {
    if (t.valor < 0) return false;
    if (t.tipo == TransactionType.Saque && t.valor > this.saldo()) return false;
    return true;
  }

  saldo = computed(() => {
    return this.transactions().reduce((acc, currentTransaction) => {
      const calcularTransacao = this.computeTransaction[currentTransaction.tipo];
      return acc + calcularTransacao(currentTransaction.valor);
    }, 0);
  });

  processarTransacao(transaction: Transaction) {
    this.processedTransaction.set(transaction);

    if (!this.isValidTransaction(transaction)) {
      transaction.hasError = true;
      transaction.errorMessage = 'A transação é inválida e não pôde ser concluída!';
      return;
    }
    this.transactions.update((listTransactions) => [transaction, ...listTransactions]);
  }
}
