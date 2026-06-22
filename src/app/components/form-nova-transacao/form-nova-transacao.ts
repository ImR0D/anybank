import { ChangeDetectorRef, Component, effect, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction, TransactionType } from '../../models/transaction';
import { KeyValuePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, KeyValuePipe, TitleCasePipe],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css',
})
export class FormNovaTransacao {
  private cdr = inject(ChangeDetectorRef);
  private errorTimeout: any;

  transactionError = '';
  tipoTransacao = '';
  valorTransacao = '';

  transacaoCriada = output<Transaction>();
  transacaoRecebida = input<Transaction>();
  tipoTransacaoEnum = TransactionType;

  realizarTransacao() {
    const transacao = new Transaction(
      this.tipoTransacao as TransactionType,
      Number(this.valorTransacao),
      new Date(),
    );

    this.transacaoCriada.emit(transacao);
    this.valorTransacao = '';
    this.tipoTransacao = '';

    let transaction = this.transacaoRecebida();
    if (transaction != null && transaction.hasError) {
      this.transactionError = transaction.errorMessage!;
    }
  }

  constructor() {
    effect(() => {
      const transaction = this.transacaoRecebida();

      this.checkTransactionErrorTimeouts();

      if (transaction && transaction.hasError) {
        this.transactionError = transaction.errorMessage ?? 'Erro ao realizar transação';
        if (this.errorTimeout) {
          clearTimeout(this.errorTimeout);
        }
      }

      this.clearTransactionErrorTimeout(2000);
    });
  }

  private checkTransactionErrorTimeouts() {
    const transaction = this.transacaoRecebida();
    if (!transaction || !transaction.hasError) {
      this.transactionError = '';
      if (this.errorTimeout) clearTimeout(this.errorTimeout);
      this.cdr.markForCheck();
      return;
    }
  }
  private clearTransactionErrorTimeout(timeout: number) {
    this.errorTimeout = setTimeout(() => {
      this.transactionError = '';
      this.cdr.markForCheck();
    }, timeout);
  }
}
