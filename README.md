# Api-estoque
Api para Gerenciamento de um estoque de uam Fabrica de bolos.

### 🏭 Como Funcionar

- Clonar o Repositório

git clone [https://github.com/vitorcrl/Api-estoque.git](https://github.com/vitorcrl/Api-estoque.git)

- Criar container no docker

```tsx
docker run --name estoque_postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

docker start estoque_postgres
```

- Acessar a pasta Clonada no seu Computador, e abrir o VsCode.

```tsx
code .
```

- Instalação de dependencias

```tsx
yarn init
```

- Iniciar a Api

```tsx
yarn dev:server
```

- Criação de Migrations from Database Postgres.

```tsx
yarn typeorm migration:run
```

### 🏭 Tecnologias Utilizadas:

- Express
- Node
- Eslint
- TypeScript
- Docker
- TypeOrm
- Postgres
- Body-parser
- Typeorm
- Prettier
- EsLint
- BcryptJs
- Jsonwebtoken
