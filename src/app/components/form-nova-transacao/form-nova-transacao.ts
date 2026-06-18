import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction, TransactionType } from '../../models/transaction';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css',
})
export class FormNovaTransacao {
  tipoTransacao = '';
  valorTransacao = '';

  transacaoCriada = output<Transaction>();
  realizarTransacao() {
    const transacao = new Transaction(
      this.tipoTransacao as TransactionType,
      Number(this.valorTransacao),
    );

    this.transacaoCriada.emit(transacao);
    this.valorTransacao = '';
    this.tipoTransacao = '';
  }
}
