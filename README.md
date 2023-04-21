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
```