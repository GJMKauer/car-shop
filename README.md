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

Antes de iniciar o projeto, é necessário instalar as dependências dele com o comando
```
npm install
```

Para rodar o projeto, é necessário executar o comando
```
docker-compose up -d
```
na raíz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível. Esse comando deve ser executado via terminal dentro do diretório onde está o arquivo **docker-compose.yml**.

Este projeto é o último projeto individual do Backend da Trybe, e penúltimo do módulo. O projeto consolida muito do que foi aprendido desde o início do módulo, como utilização de Docker, arquiteturação do código seguindo o modelo MSC e criação de APIs RESTful com CRUD completo. No caso deste projeto, nos aprofundamos ainda mais na utilização de SOLID para boa escrita e manutenabilidade do código, bem como utilização de POO e TypeScript para conferir mais robustez ao projeto. Como desafios, tivemos que criar uma API CRUD de uma concessionária, em que é possível ler, criar, editar e deletar veículos (carros e motos) do banco de dados da concessionária.
Este projeto utiliza o banco de dados não relacional MongoDB, e para manipulá-lo fizemos uso da ODM `Mongoose`.

Também foram desenvolvidos testes com cobertura de 100% do projeto, utilizando as ferramentas **Mocha**, **Chai** e **Sinon**. Para executar os testes do projeto, é necessário rodar o comando
```
npm run test:coverage
```
dentro da pasta raíz do projeto, fora do terminal do Docker. Após a execução do comando, serão exibidos todos os testes criados por mim para a obtenção de 100% de cobertura do projeto.

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