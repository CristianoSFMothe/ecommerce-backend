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