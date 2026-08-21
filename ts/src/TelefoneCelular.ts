export class TelefoneCelular {
  private ddd: string;
  private numero: string;

  constructor(ddd: string, numero: string) {
    this.ddd = ddd;
    this.numero = numero;
  }

  getDdd(): string {
    return this.ddd;
  }
  setDdd(ddd: string): void {
    this.ddd = ddd;
  }

  getNumero(): string {
    return this.numero;
  }
  setNumero(numero: string): void {
    this.numero = numero;
  }

  getDddMaiuscula(): string {
    return this.ddd.toUpperCase();
  }
  getDddMinuscula(): string {
    return this.ddd.toLowerCase();
  }
  getNumeroMaiuscula(): string {
    return this.numero.toUpperCase();
  }
  getNumeroMinuscula(): string {
    return this.numero.toLowerCase();
  }

  toString(): string {
    return `${this.ddd} ${this.numero}`;
  }

  get descricao(): string {
    return [
      "---------------",
      "Telefone:",
      `DDD: ${this.ddd}`,
      `Número: ${this.numero}`,
      "---------------",
    ].join("\n");
  }
}
