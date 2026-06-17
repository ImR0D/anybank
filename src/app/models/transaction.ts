export class Transaction {
  constructor(
    public readonly tipo: TransactionType,
    public readonly valor: number,
  ) {}
}

export enum TransactionType {
  Deposito = 'deposito',
  Saque = 'saque',
}
