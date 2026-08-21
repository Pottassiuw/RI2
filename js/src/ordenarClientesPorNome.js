// Recebe um Array de Cliente e devolve um novo Array, com os mesmos
// clientes ordenados alfabeticamente pelo nome (não altera o original).
function ordenarClientesPorNome(clientes) {
  return [...clientes].sort((a, b) =>
    a.getNome().localeCompare(b.getNome(), "pt-BR", { sensitivity: "base" })
  );
}

module.exports = ordenarClientesPorNome;
