# Ecommerce Back-end

## Configurações

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