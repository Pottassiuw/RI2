function Cliente(nome, telefoneCelular, email, endereco) {
  this.nome = nome;
  this.telefoneCelular = telefoneCelular;
  this.email = email;
  this.endereco = endereco;

  this.getNome = function () {
    return this.nome;
  };
  this.setNome = function (nome) {
    this.nome = nome;
  };

  this.getTelefoneCelular = function () {
    return this.telefoneCelular;
  };
  this.setTelefoneCelular = function (telefoneCelular) {
    this.telefoneCelular = telefoneCelular;
  };

  this.getEmail = function () {
    return this.email;
  };
  this.setEmail = function (email) {
    this.email = email;
  };

  this.getEndereco = function () {
    return this.endereco;
  };
  this.setEndereco = function (endereco) {
    this.endereco = endereco;
  };

  this.getNomeMaiusculo = function () {
    return String(this.nome).toUpperCase();
  };
  this.getNomeMinusculo = function () {
    return String(this.nome).toLowerCase();
  };
  this.getEmailMaiusculo = function () {
    return String(this.email).toUpperCase();
  };
  this.getEmailMinusculo = function () {
    return String(this.email).toLowerCase();
  };
  this.getTelefoneCelularMaiusculo = function () {
    return String(this.telefoneCelular).toUpperCase();
  };
  this.getTelefoneCelularMinusculo = function () {
    return String(this.telefoneCelular).toLowerCase();
  };
  this.getEnderecoMaiusculo = function () {
    return String(this.endereco).toUpperCase();
  };
  this.getEnderecoMinusculo = function () {
    return String(this.endereco).toLowerCase();
  };

  Object.defineProperty(this, "descricao", {
    get: function () {
      const linhas = [
        "---------------",
        "Informações do Cliente:",
        this.nome,
        "---------------",
        this.telefoneCelular.descricao,
        this.endereco.descricao,
      ];

      const apelidoSecreto = "houoin kyouma";
      const nomeNormalizado = String(this.nome)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      if (nomeNormalizado.includes(apelidoSecreto)) {
        linhas.push("El Psy Congroo. 1.048596% de convergência mundial.");
      }

      return linhas.join("\n");
    },
  });
}

module.exports = Cliente;
