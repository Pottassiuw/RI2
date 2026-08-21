function Endereco(estado, cidade, rua, numero) {
  this.estado = estado;
  this.cidade = cidade;
  this.rua = rua;
  this.numero = numero;

  this.getEstado = function () {
    return this.estado;
  };
  this.setEstado = function (estado) {
    this.estado = estado;
  };

  this.getCidade = function () {
    return this.cidade;
  };
  this.setCidade = function (cidade) {
    this.cidade = cidade;
  };

  this.getRua = function () {
    return this.rua;
  };
  this.setRua = function (rua) {
    this.rua = rua;
  };

  this.getNumero = function () {
    return this.numero;
  };
  this.setNumero = function (numero) {
    this.numero = numero;
  };

  this.getEstadoMaiusculo = function () {
    return String(this.estado).toUpperCase();
  };
  this.getEstadoMinusculo = function () {
    return String(this.estado).toLowerCase();
  };
  this.getCidadeMaiuscula = function () {
    return String(this.cidade).toUpperCase();
  };
  this.getCidadeMinuscula = function () {
    return String(this.cidade).toLowerCase();
  };
  this.getRuaMaiuscula = function () {
    return String(this.rua).toUpperCase();
  };
  this.getRuaMinuscula = function () {
    return String(this.rua).toLowerCase();
  };
  this.getNumeroMaiusculo = function () {
    return String(this.numero).toUpperCase();
  };
  this.getNumeroMinusculo = function () {
    return String(this.numero).toLowerCase();
  };

  // usado pelos métodos de caixa alta/baixa do Cliente
  this.toString = function () {
    return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado}`;
  };

  Object.defineProperty(this, "descricao", {
    get: function () {
      return [
        "Endereço:",
        `Rua: ${this.rua}`,
        `Número: ${this.numero}`,
        `Cidade: ${this.cidade}`,
        `Estado: ${this.estado}`,
        "---------------",
      ].join("\n");
    },
  });
}

module.exports = Endereco;
