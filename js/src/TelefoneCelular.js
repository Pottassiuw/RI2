function TelefoneCelular(ddd, numero) {
  this.ddd = ddd;
  this.numero = numero;

  this.getDdd = function () {
    return this.ddd;
  };
  this.setDdd = function (ddd) {
    this.ddd = ddd;
  };

  this.getNumero = function () {
    return this.numero;
  };
  this.setNumero = function (numero) {
    this.numero = numero;
  };

  this.getDddMaiuscula = function () {
    return String(this.ddd).toUpperCase();
  };
  this.getDddMinuscula = function () {
    return String(this.ddd).toLowerCase();
  };
  this.getNumeroMaiuscula = function () {
    return String(this.numero).toUpperCase();
  };
  this.getNumeroMinuscula = function () {
    return String(this.numero).toLowerCase();
  };

  // usado pelos métodos de caixa alta/baixa do Cliente
  this.toString = function () {
    return `${this.ddd} ${this.numero}`;
  };

  Object.defineProperty(this, "descricao", {
    get: function () {
      return [
        "---------------",
        "Telefone:",
        `DDD: ${this.ddd}`,
        `Número: ${this.numero}`,
        "---------------",
      ].join("\n");
    },
  });
}

module.exports = TelefoneCelular;
