# Boas vindas ao repositório do projeto <b>Car Shop</b>!

Esse projeto foi desenvolvido durante o módulo de Backend na Trybe! #vqv 

Aqui você vai encontrar os detalhes de como foi o desenvolvimento do projeto e quais foram os requisitos técnicos necessários para a entrega do desafio.

---

# Habilidades desenvolvidas

Neste projeto, fui capaz de:

- Utilizar o banco de dados não relacional MongoDB;
- Utilizar o ODM Mongoose para trabalhar com o banco de dados MongoDB;
- Exercitar a utilização de POO;
- Construir uma API CRUD utilizando dos preceitos de bom desenvolvimento com SOLID.
- Construção de testes unitários com a utilização de **Mocha**, **Chai** e **Sinon**.
   
---

# MongoDB

```MongoDB``` é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.
Para mais detalhes, acesse a documentação oficial do MongoDB [aqui](https://www.mongodb.com/).

---

# ODM

**O**bject **D**ocument **M**apping são ferramentas que lidam com dados estruturados em bancos de dados não relacionais (como o MongoDB). No caso deste projeto, utilizamos o **Mongoose**.

---

# CRUD

CRUD é um acrônimo para **C**reate, **R**ead, **U**pdate and **D**elete. Em português seria **Criar**, **Ler**, **Atualizar** e **Deletar** registros. Nesse projeto trabalhamos diretamente com a manipulação no banco de dados MySQL, utilizando do ORM Sequelize para a manipulação do banco.

---

# POO

O paradigma da POO (**P**rogramação **O**rientada a **O**bjetos) é um modelo de análise, projeto e programação baseado na aproximação entre o mundo real e o mundo virtual, através da criação e interação entre objetos, atributos, códigos, métodos, entre outros.

---

# SOLID

O SOLID é um facilitador que torna o código mais coeso, além de mais fácil de manter, estender, adaptar e ajustar conforme alterações de escopo. Além disso, ele faz com que o código seja testável e de fácil entendimento, extensível e forneça o máximo de reaproveitamento. O termo SOLID é um acrônimo que representa cinco ideias, originadas pelo famoso Robert Cecil Martin, e significam:

- Single Responsability Principle (Princípio da Responsabilidade Única);
- Open/Closed Principle (Princípio Aberto/Fechado);
- Liskov Substitution Principle (Princípio da substituição de Liskov);
- Interface Segregation Principle (Princípio da Segregação de Interface);
- Dependency Inversion Principle (Princípio da Inversão de Dependência).

Para mais detalhes, sugiro consultar este <a href="https://pt.wikipedia.org/wiki/SOLID" target="_blank">link</a>.

---

# Funcionamento da aplicação

Para iniciar o projeto, é necessário possuir o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

Após clonar o projeto em seu computador, para iniciá-lo é necessário executar o comando
```
docker-compose up -d && docker exec -it car_shop bash
```
e na sequência execute esses comandos, um por vez
```
npm install
npm run dev
```
na pasta raíz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível.

Após isso, você pode realizar as requisições de CRUD através de algum cliente HTTP, como o `Insomnia`, o `Postman`, o `HTTPie` ou até mesmo extensões do VSCode como o `Thunder Client` através dos enpoints listados abaixo.

Este projeto é o último projeto individual do Backend da Trybe, e penúltimo do módulo. O projeto consolida muito do que foi aprendido desde o início do módulo, como utilização de Docker, arquiteturação do código seguindo o modelo MSC e criação de APIs RESTful com CRUD completo. No caso deste projeto, nos aprofundamos ainda mais na utilização de SOLID para boa escrita e manutenabilidade do código, bem como utilização de POO e TypeScript para conferir mais robustez ao projeto. Como desafios, tivemos que criar uma API CRUD de uma concessionária, em que é possível ler, criar, editar e deletar veículos (carros e motos) do banco de dados da concessionária.
Este projeto utiliza o banco de dados não relacional MongoDB, e para manipulá-lo fizemos uso da ODM `Mongoose`.

Também foram desenvolvidos testes com cobertura de 100% do projeto, utilizando as ferramentas **Mocha**, **Chai** e **Sinon**. Para executar os testes do projeto, é necessário rodar o comando
```
npm run test:coverage
```
dentro da pasta raíz do projeto, **fora do terminal do Docker***. Após a execução do comando, serão exibidos todos os testes criados por mim para a obtenção de 100% de cobertura do projeto.

\* Caso tenha acessado o terminal do Docker seguindo os comandos anteriores, você pode digitar "exit" sem aspas e apertar `Enter`. Você sairá do terminal do Docker. Se o seu terminal estiver travado (sem conseguir digitar), você pode apertar `Ctrl + C` e, então, digitar o "exit" para sair do terminal do Docker.

---

## 📚 Documentação (endpoints)

### 🚗 Cars

| Método | Funcionalidade                          | URL                        |
| ------ | --------------------------------------- | -------------------------- |
| `GET`  | Retorna uma lista de carros cadastrados | http://localhost:3001/cars |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  // ...
]

```

</details>
<br>
<br>

| Método | Funcionalidade                                                                    | URL                            |
| ------ | --------------------------------------------------------------------------------- | ------------------------------ |
| `GET`  | Retorna um carro no banco de dados (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/cars/:id |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
{
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido.
</details>
<br>
<br>

| Método | Funcionalidade                                     | URL                        |
| ------ | -------------------------------------------------- | -------------------------- |
| `POST` | Realiza o cadastro de um veículo no banco de dados | http://localhost:3001/cars |

<details>
  <summary>A estrutura do body da requisição deverá seguir o padrão abaixo:</summary>
  
```json
{
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>
  
```json
{
   _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code> caso a requisição receba um objeto vazio; <br>
  - A rota retorna o código <code>400</code> ao tentar criar um carro com quantidade de assentos inferior a 2;<br>
  - A rota retorna o código <code>400</code> ao tentar criar um carro com quantidade de portas inferior a 2;<br>
  - A rota retorna o código <code>400</code> ao tentar criar um carro sem <code>model</code>, <code>year</code>, <code>color</code> e <code>buyValue</code>;<br>
  - A rota retorna o código <code>400</code> ao tentar criar um carro sem <code>doorsQty</code> e <code>seatsQty</code>;<br>
  - Não é possível criar um carro se os atributos <code>model</code>, <code>year</code>, <code>color</code>, <code>buyValue</code>, <code>doorsQty</code> e <code>seatsQty</code> estiverem com tipos errados.
</details>
<br>
<br>

| Método | Funcionalidade                                                                     | URL                            |
| ------ | ---------------------------------------------------------------------------------- | ------------------------------ |
| `PUT`  | Atualiza um carro no banco de dados (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/cars/:id |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```

</details>

<details></code>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido;<br>
  - A rota retorna o código <code>400</code> caso o <code>body</code> esteja vazio.
</details>
<br>
<br>

| Método   | Funcionalidade                                                                   | URL                            |
| -------- | -------------------------------------------------------------------------------- | ------------------------------ |
| `DELETE` | Deleta um carro do banco de dados (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/cars/:id |

A rota retorna o status 204, <code>sem resposta</code>.

<details></code>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido.
</details>
<br>

### 🛵 Motorcyle

| Método | Funcionalidade                         | URL                               |
| ------ | -------------------------------------- | --------------------------------- |
| `GET`  | Retorna uma lista de motos cadastradas | http://localhost:3001/motorcycles |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  },
  // ...
]

```

</details>
<br>
<br>

| Método | Funcionalidade                                                              | URL                                   |
| ------ | --------------------------------------------------------------------------- | ------------------------------------- |
| `GET`  | Retorna uma moto pelo seu id (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/motorcycles/:id |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
{
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido.
</details>
<br>
<br>

| Método | Funcionalidade                                   | URL                               |
| ------ | ------------------------------------------------ | --------------------------------- |
| `POST` | Realiza o cadastro de uma moto no banco de dados | http://localhost:3001/motorcycles |

<details>
  <summary>A estrutura do body da requisição deverá seguir o padrão abaixo:</summary>
  
```json
{
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>
  
```json
{
   _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code> caso a requisição receba um objeto vazio;<br>
  - A rota retorna o código <code>400</code> ao tentar criar uma moto com <code>category</code> diferente de <code>Street</code>, <code>Custom</code> ou <code>Trail</code>;<br>
  - A rota retorna o código <code>400</code> ao tentar criar uma moto com <code>category</code> diferente de string;<br>
  - A rota retorna o código <code>400</code> ao tentar criar uma moto com <code>engineCapacity</code> menor ou igual a zero;<br>
  - A rota retorna o código <code>400</code> ao tentar criar uma moto com <code>engineCapacity</code> maior que 2500;<br>
  - A rota retorna o código <code>400</code> ao tentar criar um moto sem <code>model</code>, <code>year</code>, <code>color</code> e <code>buyValue</code>;<br>
  - A rota retorna o código <code>400</code> ao tentar criar um moto sem <code>category</code> e <code>engineCapacity</code>;<br>
  - Não é possível criar uma moto se os atributos <code>model</code>, <code>year</code>, <code>color</code>, <code>buyValue</code>, <code>category</code> e <code>engineCapacity</code> estiverem com tipos errados.
</details>
<br>
<br>

| Método | Funcionalidade                                                                     | URL                                   |
| ------ | ---------------------------------------------------------------------------------- | ------------------------------------- |
| `PUT`  | Atualiza uma moto no banco de dados (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/motorcycles/:id |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```

</details>

<details></code>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido;<br>
  - A rota retorna o código <code>400</code> caso o <code>body</code> esteja vazio.
</details>
<br>
<br>

| Método   | Funcionalidade                                                                   | URL                                   |
| -------- | -------------------------------------------------------------------------------- | ------------------------------------- |
| `DELETE` | Deleta uma moto do banco de dados (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/motorcycles/:id |

A rota retorna o status 204, <code>sem resposta</code>.

<details></code>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido.
</details>

---

# Histórico de Commits

É possível verificar todo o histórico de commits do projeto, de modo a visualizar passo-a-passo como foi desenvolvido o meu raciocínio até a finalização do projeto.

---

# Requisitos técnicos do desafio:

REQUISITOS OBRIGATÓRIOS

- ✅ 01 - Crie a interface IModel genérica.
  
- ✅ 02 - Crie a interface IVehicle genérica.
  
- ✅ 03 - Crie a interface ICar a partir da interface IVehicle.

- ✅ 04 - Crie uma rota para o endpoint /cars onde seja possível cadastrar um novo carro.

- ✅ 05 - Escreva testes para cobrir 15% da camada de Model.

- ✅ 06 - Escreva testes para cobrir 15% da camada de Service.

- ✅ 07 - Escreva testes para cobrir 15% da camada de Controller.

- ✅ 08 - Crie uma rota para o endpoint /cars onde seja possível listar todos os carros registrados.

- ✅ 09 - Crie uma rota para o endpoint /cars/id onde seja possível listar um único carro através do seu id.

- ✅ 10 - Escreva testes para cobrir 30% da camada de Model.

- ✅ 11 - Escreva testes para cobrir 30% da camada de Service.

- ✅ 12 - Escreva testes para cobrir 30% da camada de Controller.

- ✅ 13 - Crie uma rota para o endpoint /cars/id, onde é possível atualizar o registro de um carro através do seu id.

- ✅ 14 - Escreva testes para cobrir 60% da camada de Model.

- ✅ 15 - Escreva testes para cobrir 60% da camada de Service.

- ✅ 16 - Escreva testes para cobrir 60% da camada de Controller.

- ✅ 17 - Crie uma rota para o endpoint /cars/id para excluir os registros de um carro.


REQUISITOS BÔNUS

- ✅ 18 - Crie a interface IMotorcycle a partir da Interface IVehicle.

- ✅ 19 - Crie uma rota para o endpoint /motorcycles onde seja possível cadastrar uma nova moto.

- ✅ 20 - Crie uma rota para o endpoint /motorcycles onde seja possível listar todas as motos registradas.

- ✅ 21 - Crie uma rota para o endpoint /motorcycles/id onde seja possível listar uma única moto através do seu id.

- ✅ 22 - Crie uma rota para o endpoint /motorcycles/id onde é possível atualizar o registro de uma moto através do seu id.

- ✅ 23 - Crie uma rota para o endpoint /motorcycles/id para excluir os registros de uma moto.


REQUISITOS NÃO AVALIADOS

- ✅ 24 - Escreva testes para cobrir 100% da camada de Model.

- ✅ 25 - Escreva testes para cobrir 100% da camada de Service.

- ✅ 26 - Escreva testes para cobrir 100% da camada de Controller.
