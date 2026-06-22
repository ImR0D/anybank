import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Transaction } from '../../../models/transaction';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.html',
  styleUrl: './transacao.css',
})
export class Transacao {
  transactionItem = input.required<Transaction>();
}
