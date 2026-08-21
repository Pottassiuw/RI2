import { TelefoneCelular } from "./src/TelefoneCelular";
import { Endereco } from "./src/Endereco";
import { Cliente } from "./src/Cliente";
import { ordenarClientesPorNome } from "./src/ordenarClientesPorNome";

// exemplo da atividade
const telefone = new TelefoneCelular("11", "999999999");
const endereco = new Endereco("SP", "São Paulo", "Av. Paulista", "987");
const cliente = new Cliente(
  "Carlos Conrado Heinz",
  telefone,
  "carlos.conrado@app.com",
  endereco
);

console.log(cliente.descricao);

console.log("\n--- get/set e caixa alta/baixa ---");
console.log(cliente.getNome());
console.log(cliente.getNomeMaiusculo());
console.log(cliente.getEmailMinusculo());

cliente.setNome("Carlos C. Heinz");
console.log(cliente.getNome());

console.log("\n--- Ordenação de clientes por nome ---");

const clientes: Cliente[] = [
  new Cliente(
    "Yuki Amane",
    new TelefoneCelular("11", "911112222"),
    "yuki.amane@app.com",
    new Endereco("SP", "São Paulo", "Rua Akihabara", "1")
  ),
  new Cliente(
    "Carlos Conrado Heinz",
    telefone,
    "carlos.conrado@app.com",
    endereco
  ),
  new Cliente(
    "Álvaro Zeppeli",
    new TelefoneCelular("21", "988887777"),
    "alvaro.zeppeli@app.com",
    new Endereco("RJ", "Rio de Janeiro", "Rua das Palmeiras", "42")
  ),
  new Cliente(
    "Rintarou Okabe (Houoin Kyouma)",
    new TelefoneCelular("11", "918356112"),
    "houoin.kyouma@future-gadget-lab.jp",
    new Endereco("SP", "São Paulo", "Lab de Akiba", "4")
  ),
];

const clientesOrdenados = ordenarClientesPorNome(clientes);

console.log(
  "Original:  ",
  clientes.map((c) => c.getNome())
);
console.log(
  "Ordenado:  ",
  clientesOrdenados.map((c) => c.getNome())
);

console.log("\n---");
const okabe = clientesOrdenados.find((c) =>
  c.getNome().toLowerCase().includes("kyouma")
);
if (okabe) {
  console.log(okabe.descricao);
}
