# Ecommerce Back-end

## Configurações

Configurações iniciais e instalações básicas.

* Instalação do *bcrypt*

```bash
npm i bcrypt
```

* Instalação da tipagem *bcrypt*

```bash
npm i -D @types/bcrypt
```

* Docker

```bash
docker pull postgres
```

* Instancia do Docker

```bash
docker run --name ecommerce -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

* Configuração

```bash
npm i --save @nestjs/config
```

* Instalado o PostgreSQL e TypeORM

```bash
npm install --save typeorm pg @nestjs/typeorm
```

## Migrations

Não é interessante ter na nossa aplicação o `synchronize: true`, pois isso sempre quando houver uma ateração na estrutura da tabela, irá recriar ela toda novamente, podendo fazer com que se perga informações. Para isso usamos o `migration`.

```bash
# Usuário
npx typeorm migration:create ./src/migration/create_table_user

# Estado
npx typeorm migration:create ./src/migration/create_table_state

# Cidade
npx typeorm migration:create ./src/migration/create_table_city

# Endereço
npx typeorm migration:create ./src/migration/create_table_address

# Alterar o Estado
npx typeorm migration:create ./src/migration/alter_table_state

# Insert o Estado
npx typeorm migration:create ./src/migration/insert_in_state

# Insert Cidade
npx typeorm migration:create ./src/migration/insert_in_city
```

## Criando novos modulos

Criação de módulos que servirão como base para um cadastro mais realiza

* Estado

```bash
# Modulo
nest g module state

# Controller
nest g controller state --no-spec

# Service
nest g service state --no-spec
```

* Cidade

```bash
# Modulo
nest g module city

# Controller
nest g controller city --no-spec

# Service
nest g service city --no-spec
```

* Endereço

```bash
# Modulo
nest g module address

# Controller
nest g controller address --no-spec

# Service
nest g service address --no-spec
```

## Sistema de cache

Com o objetivo de retuzir o tempo de busca, será criado um modo de armazena algumas informações no cache da memória de forma temporaria. Para isso será necessário instalar a seguinte library

```bash
npm install cache-manager 
```

### Seperando o sistema de cache

Para pode utilizar o sistema de cache de forma global

```bash
# Module
nest g module cache

# Service
 nest g service cache --no-spec
 ```

## Validações

Para melhor desempenho e segurança o *Nest* trabalha com *Pipes* para geração de validações

```bash
npm i --save class-validator class-transformer
```

# Autorização e Autenticação

```bash
npm install --save @nestjs/passport passport passport-local
```

```bash
npm install --save-dev @types/passport-local
```
## Criação dos módulos

```bash
nest g module auth

nest g service auth --no-spec

nest g controller auth --no-spec
```

## JWT

```bash
npm install --save @nestjs/jwt passport-jwt

npm install --save-dev @types/passport-jwt
```




