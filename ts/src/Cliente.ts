import { TelefoneCelular } from "./TelefoneCelular";
import { Endereco } from "./Endereco";

export class Cliente {
  private nome: string;
  private telefoneCelular: TelefoneCelular;
  private email: string;
  private endereco: Endereco;

  constructor(
    nome: string,
    telefoneCelular: TelefoneCelular,
    email: string,
    endereco: Endereco
  ) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;
  }

  getNome(): string {
    return this.nome;
  }
  setNome(nome: string): void {
    this.nome = nome;
  }

  getTelefoneCelular(): TelefoneCelular {
    return this.telefoneCelular;
  }
  setTelefoneCelular(telefoneCelular: TelefoneCelular): void {
    this.telefoneCelular = telefoneCelular;
  }

  getEmail(): string {
    return this.email;
  }
  setEmail(email: string): void {
    this.email = email;
  }

  getEndereco(): Endereco {
    return this.endereco;
  }
  setEndereco(endereco: Endereco): void {
    this.endereco = endereco;
  }

  getNomeMaiusculo(): string {
    return this.nome.toUpperCase();
  }
  getNomeMinusculo(): string {
    return this.nome.toLowerCase();
  }
  getEmailMaiusculo(): string {
    return this.email.toUpperCase();
  }
  getEmailMinusculo(): string {
    return this.email.toLowerCase();
  }
  getTelefoneCelularMaiusculo(): string {
    return this.telefoneCelular.toString().toUpperCase();
  }
  getTelefoneCelularMinusculo(): string {
    return this.telefoneCelular.toString().toLowerCase();
  }
  getEnderecoMaiusculo(): string {
    return this.endereco.toString().toUpperCase();
  }
  getEnderecoMinusculo(): string {
    return this.endereco.toString().toLowerCase();
  }

  get descricao(): string {
    const linhas = [
      "---------------",
      "Informações do Cliente:",
      this.nome,
      "---------------",
      this.telefoneCelular.descricao,
      this.endereco.descricao,
    ];

    const apelidoSecreto = "houoin kyouma";
    const nomeNormalizado = this.nome
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    if (nomeNormalizado.includes(apelidoSecreto)) {
      linhas.push("El Psy Congroo. 1.048596% de convergência mundial.");
    }

    return linhas.join("\n");
  }
}
