# Cardapio Digital

Projeto em fase inicial para um cardapio digital, com a proposta de organizar itens de comida e futuramente oferecer uma experiencia simples para consulta e administracao do menu.

Por enquanto, o repositorio esta estruturado com um backend em Spring Boot e uma pasta reservada para o frontend.

## Estrutura

```text
.
+-- backend/   # API em Spring Boot
+-- frontend/  # Interface do usuario, ainda em preparacao
`-- README.md
```

## Tecnologias atuais

- Java 25
- Spring Boot
- Maven
- PostgreSQL

## Backend

O backend esta em `backend/` e usa o Maven Wrapper incluido no projeto.

Para executar localmente:

```bash
cd backend
./mvnw spring-boot:run
```

No Windows:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

A aplicacao espera um banco PostgreSQL local com as configuracoes definidas em `backend/src/main/resources/application.properties`.


