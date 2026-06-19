export class Transaction {
  constructor(
    public readonly tipo: TransactionType,
    public readonly valor: number,
    public hasError?: boolean,
    public errorMessage?: string,
  ) {}
}

export enum TransactionType {
  Deposito = 'deposito',
  Saque = 'saque',
}
