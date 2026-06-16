import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  imports: [CurrencyPipe],
  templateUrl: './conta.html',
  styleUrl: './conta.css',
})
export class Conta {}
