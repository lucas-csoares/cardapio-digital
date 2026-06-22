# Cardapio Digital

Aplicacao full stack para gerenciamento de um cardapio digital. O sistema lista itens cadastrados e permite adicionar novos produtos com nome, preco e URL da imagem pela interface web.

## Funcionalidades

- Listagem dos itens do cardapio.
- Cadastro de novos itens.
- Confirmacao visual de cadastro realizado com sucesso.
- Mensagem de erro quando o cadastro nao puder ser concluido.
- Atualizacao automática da lista apos novos cadastros.

## Tecnologias

### Backend

- Java 25
- Spring Boot
- Spring Web MVC
- Spring Data JPA
- PostgreSQL
- Maven
- Lombok

### Frontend

- React
- TypeScript
- Vite
- Axios
- TanStack React Query

## Requisitos

- Java 25
- Maven, ou o Maven Wrapper incluído no backend
- Node.js
- npm
- PostgreSQL

## Configuracao do banco

Crie um banco PostgreSQL chamado `cardapio-digital`.

As configurações usadas pela API ficam em `backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/cardapio-digital
spring.datasource.username=postgres
spring.datasource.password=root
```

Caso seu ambiente use outro usuario, senha ou porta, atualize esse arquivo antes de iniciar o backend.

## Como executar

### Backend

No Windows:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

No Linux/macOS:

```bash
cd backend
./mvnw spring-boot:run
```

A API ficará disponível em:

```text
http://localhost:8080
```

### Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

O Vite exibira a URL local da aplicação, normalmente:

```text
http://localhost:5173
```

## Endpoints da API

### Listar alimentos

```http
GET /food
```

Resposta:

```json
[
  {
    "id": 1,
    "title": "Pizza",
    "image": "https://example.com/pizza.jpg",
    "price": 4500
  }
]
```

### Cadastrar alimento

```http
POST /food
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "title": "Hamburguer",
  "image": "https://example.com/hamburguer.jpg",
  "price": 3000
}
```


