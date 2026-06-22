export class Transaction {
  public readonly id = crypto.randomUUID();
  constructor(
    public readonly tipo: TransactionType,
    public readonly valor: number,
    public readonly dataTransacao: Date,
    public hasError?: boolean,
    public errorMessage?: string,
  ) {}
}

export enum TransactionType {
  Deposito = 'depósito',
  Saque = 'saque',
}
