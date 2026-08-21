import { Cliente } from "./Cliente";

// Recebe um Array de Cliente e devolve um novo Array, com os mesmos
// clientes ordenados alfabeticamente pelo nome (não altera o original).
export function ordenarClientesPorNome(clientes: Cliente[]): Cliente[] {
  return [...clientes].sort((a, b) =>
    a.getNome().localeCompare(b.getNome(), "pt-BR", { sensitivity: "base" })
  );
}
