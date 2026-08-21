export class Endereco {
  private estado: string;
  private cidade: string;
  private rua: string;
  private numero: string;

  constructor(estado: string, cidade: string, rua: string, numero: string) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
  }

  getEstado(): string {
    return this.estado;
  }
  setEstado(estado: string): void {
    this.estado = estado;
  }

  getCidade(): string {
    return this.cidade;
  }
  setCidade(cidade: string): void {
    this.cidade = cidade;
  }

  getRua(): string {
    return this.rua;
  }
  setRua(rua: string): void {
    this.rua = rua;
  }

  getNumero(): string {
    return this.numero;
  }
  setNumero(numero: string): void {
    this.numero = numero;
  }

  getEstadoMaiusculo(): string {
    return this.estado.toUpperCase();
  }
  getEstadoMinusculo(): string {
    return this.estado.toLowerCase();
  }
  getCidadeMaiuscula(): string {
    return this.cidade.toUpperCase();
  }
  getCidadeMinuscula(): string {
    return this.cidade.toLowerCase();
  }
  getRuaMaiuscula(): string {
    return this.rua.toUpperCase();
  }
  getRuaMinuscula(): string {
    return this.rua.toLowerCase();
  }
  getNumeroMaiusculo(): string {
    return this.numero.toUpperCase();
  }
  getNumeroMinusculo(): string {
    return this.numero.toLowerCase();
  }

  toString(): string {
    return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado}`;
  }

  get descricao(): string {
    return [
      "Endereço:",
      `Rua: ${this.rua}`,
      `Número: ${this.numero}`,
      `Cidade: ${this.cidade}`,
      `Estado: ${this.estado}`,
      "---------------",
    ].join("\n");
  }
}
