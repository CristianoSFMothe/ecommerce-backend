# Ecommerce Back-end

## Configurações

Para dar maior segurança ao sistema, efitando assim que possa ter vazendo de senha, iremos resolver esse problema, armazenando a senha de uma cum forma criptografada.
Porém, na criptografia simétrica/assimétrica sempre existe uma chave que serve para encriptar, como também descriptografar as informações dos usuários. Portanto, por meio desta chave é possível reverter a encriptação e obter as informações originais.

![image](https://user-images.githubusercontent.com/68359459/235333200-69e74dc4-d70f-4bab-845e-6710759e61ef.png)

<details><summary>bcryp instalação</summary>
* Instalação do *bcrypt*

```bash
# Instalação do bcrypt
npm i bcrypt

# Tipagens
npm i -D @types/bcrypt
```
  
</details>

Docker é uma plataforma voltada para a criação e execução de containers. Diferente de uma VM, um container empacota somente o código, dependências e variáveis de ambiente necessárias para a execução de uma aplicação. Sendo assim, ao invés de termos uma infraestrutura onde cada VM tem seu próprio SO sendo responsável por uma aplicação diferente, temos uma infraestrutura onde, com apenas um sistema operacional e através do Docker, podemos gerenciar diversas aplicações.

![image](https://user-images.githubusercontent.com/68359459/235333209-9d2ad54b-29f0-4ef4-ac10-e08db2bd5214.png)

<details><summary>Docker instalação</summary>
* Docker

```bash
docker pull postgres
```

* Instancia do Docker

```bash
docker run --name ecommerce -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

</details>


O módulo que fornece suporte para carregar configurações de aplicativos de diferentes fontes em NestJS.
Documentação: <a href="https://docs.nestjs.com/techniques/configuration" target="blank">@nestjs/config</a>

## Configura do NestJs Iniciais

<details><summary>nestjs/cont instalação</summary>

* Configuração

```bash
npm i --save @nestjs/config
```

 O módulo que fornece suporte para integração com o TypeORM, um ORM para Node.js, em aplicativos NestJS.
 Documentação <a href="https://docs.nestjs.com/recipes/sql-typeorm" target="blank">@nestjs/typeorm</a>

* Instalado o PostgreSQL e TypeORM

```bash
npm install --save typeorm pg @nestjs/typeorm
```

</details>

## Migrations

Não é interessante ter na nossa aplicação o `synchronize: true`, pois isso sempre quando houver uma ateração na estrutura da tabela, irá recriar ela toda novamente, podendo fazer com que se perga informações. Para isso usamos o `migration`.

<details><summary>Primeiras Migrations</summary>

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

</details>

## Criando novos modulos

Criação de módulos que servirão como base para um cadastro mais realiza

<details><summary>Criação dos primeiros módulos</summary>

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

</details>

## Sistema de cache

Com o objetivo de retuzir o tempo de busca, será criado um modo de armazena algumas informações no cache da memória de forma temporaria. Para isso será necessário instalar a seguinte library

<details><summary>Sistema do cache</summary>

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

</details>

## Validações

Para melhor desempenho e segurança o *Nest* trabalha com *Pipes* para geração de validações

Pipes são classes anotadas com o decorador @Injectable() (você pode pensar que eles são semelhantes a Providers). Pipes implementam a interface genérica PipeTransform. Portanto, todo pipe deve ter um método transform(). Este método será chamado pelo NestJS para processar os argumentos.
Documentação <a href="https://docs.nestjs.com/techniques/validation" target="blank">class-validator e class-transformer</a>

<details><summary>Instação</summary>

```bash
npm i --save class-validator class-transformer
```

</details>

# Autorização e Autenticação

O módulo que fornece suporte para autenticação JWT em NestJS.
Documentação: <a href="https://docs.nestjs.com/security/authentication#jwt-based-authentication" target="blank">Nestjs Auth</a>

O módulo que fornece suporte para autenticação em aplicativos NestJS, incluindo OAuth, JWT e outros.
Documentação: <a href="https://docs.nestjs.com/recipes/sql-typeorm" target="blank">passport e passport-local</a>

<details><summary>Instalação</summary>

```bash
npm install --save @nestjs/passport passport passport-local
```

```bash
npm install --save-dev @types/passport-local
```

</details>

## Criação dos módulos

Os módulos responsáveis por fazer a autenticação através do login no sistema, com o usuário previamente cadastrado.

<details><summary>Criação do Auth</summary>

```bash
# Module Auth
nest g module auth

# Service Auth
nest g service auth --no-spec

# Controller Auth
nest g controller auth --no-spec
```

</details>

## JWT

O que é JWT?
JWT ou JSON Web Token é um padrão da indústria definido pela <a href="https://datatracker.ietf.org/doc/html/rfc7519" target="blank">RFC7519</a> que tem como objetivo transmitir ou armazenar de forma compacta e segura objetos JSON entre diferentes aplicações. O JWT é digitalmente assinado usando uma chave secreta com o algoritmo HMAC ou um par de chaves pública e privada RSA ou ECDSA.

## Quando devo usar JWT?

O **JSON Web Token** é utilizado em dois principais cenários, quando queremos realizar um processo de autorização em nossa aplicação ou quando queremos realizar troca de informações, abaixo detalhamos um pouco mais sobre o uso do JWT em cada um dos cenários citados.

**Autorização:** Este é o cenário mais comum para o uso do JWT. Depois que o usuário estiver autenticado, cada requisição subsequente incluirá o JWT, permitindo que o usuário acesse rotas, serviços e recursos permitidos com esse token.
Troca de Informações: JSON Web Tokens são uma boa maneira de transmitir informações com segurança entre as partes. Como os JWTs podem ser assinados, por exemplo, usando pares de chaves pública e privada podemos garantir que os remetentes são quem dizem ser.

O módulo que fornece suporte para autenticação JWT em NestJS.
Documentação: <a href="https://docs.nestjs.com/security/authentication#jwt-based-authentication" target="blank">JWT</a>

<details><summary>Instalação</summary>

```bash
npm install --save @nestjs/jwt passport-jwt

npm install --save-dev @types/passport-jwt
```

</details>

### Auterando a tabela do usuário

<details><summary>Alter table - migration</summary>

```bash
npx typeorm migration:create ./src/migration/alter-table-user
```

</details>

# Test Services

Para garantir a integridade do sistemas iremos realizar uns testes unitários

 O módulo para testes unitários e de integração em aplicativos NestJS.
 Documentação: <a href="https://docs.nestjs.com/fundamentals/testing" target="blank">tests</a>

O teste unitário consiste em verificar o comportamento das menores unidades em sua aplicação. Tecnicamente, isso seria uma classe ou até mesmo um método de classe em línguas orientadas a objetos, e seria um procedimento ou função em línguas processuais e funcionais. Funcionalmente, pode ser um conjunto de classes intimamente relacionadas.

<details><summary>test</summary>

* Teste User Service

> Para exexutar o teste automaticamente, sempre que houver uma alteração, deixar com a opção **:watch** depoois do **test**, caso contrário roda sem o **watch**

```bash
npm run test:watch src/user/__tests__/user.service.spec.ts
```

* Teste State Service

```bash
npm run test:watch src/state/__tests__/state.service.spec.ts
```

* Teste Address Service

```bash
npm run test:watch src/address/__tests__/address.service.spec.ts
```

* Teste Auth Service

```bash
npm run test:watch src/auth/__tests__/auth.service.spec.ts
````

</details>

## Criação das Migrations de Categorias e Produtos

```bash
# category
npx typeorm migration:create ./src/migration/create-table-category

# product
npx typeorm migration:create ./src/migration/create-table-product
```

<details><summary>Modulo Categoria e Produtos</summary>

* Categoria
  
```bash
# Module Category
nest g module category

# Service Category
nest g service category --no-spec

# Controller Category
nest g controller category --no-spec
```

* Produto
  
```bash
# Module Product
nest g module product

# Service Product
nest g service product --no-spec

# Controller Product
nest g controller product --no-spec
```

</details>

<details><summary>Testes</summary>

* Category Services

```bash
npm run test:watch src/category/__tests__/category.service.spec.ts
```

## Criando o Usuário Administrator

```bash
npx typeorm migration:create ./src/migration/insert-root-in-user
```

## Test Server

```bash
npm run test:watch src/product/__tests__/product.service.spec.ts
```

</details>

## Criando carrinho

<details><summary>Criação do carrinho</summary>

```bash
# Migration
npx typeorm migration:create ./src/migration/create-table-cart

# Module
nest g module cart

# Service
nest g service cart

# Controller
nest g controller cart --no-spec
```

</details>

<details><summary>Carrinho do produto</summary>

```bash
# Migration
npx typeorm migration:create ./src/migration/create-table-cart-product

# Module
nest g module cart-product

#
nest g service cart-product

```

</details>

<details><summary>Teste Cart Product</summary>

```bash
npm run test src/cart-product/__test__/cart-product.service.spec.ts
```

</details>

<details><summary>Teste Cart </summary>

```bash
npm run test src/cart/__test__/cart.service.spec.ts
```

</details>

<details><summary>Teste Cov </summary>

```bash
npm run test:cov
```

</details>

<details><summary>Teste Controller Address </summary>

```bash
npm run test src/address/__tests__/address.controller.spec.ts
```

</details>

<details><summary>Teste Controller Auth </summary>

```bash
npm run test src/auth/__tests__/auth.controller.spec.ts
```

</details>

<details><summary>Teste Controller Cart </summary>

```bash
npm run test src/cart/__test__/cart.controller.spec.ts
```

</details>

<details><summary>Teste Controller Category </summary>

```bash
npm run test src/category/__tests__/category.controller.spec.ts
```

</details>

<details><summary>Teste Controller City </summary>

```bash
npm run test src/city/__tests__/city.controller.spec.ts
```

</details>

<details><summary>Teste Controller Product </summary>

```bash
npm run test src/product/__tests__/product.controller.spec.ts
```

</details>


## Sistema de Pagamento

<details><summary>Migations</summary>

```bash
# status
npx typeorm migration:create ./src/migration/create-table-status

# Payment
npx typeorm migration:create ./src/migration/create-table-payment
```

</details>

<details><summary>Modules Payment Status</summary>

```bash
# payment status module
nest g module payment-status

# payment status service
nest g service payment-status
```

</details>

<details><summary>Modules Payment</summary>

```bash
# payment module
nest g module payment

# payment service
nest g service payment
```

</details>

<details><summary>Migration Order e Order Product</summary>

```bash
# Order
npx typeorm migration:create ./src/migration/create-table-order

# Product
npx typeorm migration:create ./src/migration/create-table-order-product
```

</details>

<details><summary>Module Order</summary>

```bash
# Module
nest g module order

# Service
nest g service order

# Controller
nest g controller order

# Test
npm run test order
```

</details>

<details><summary>Module Order Product</summary>

```bash
# Module
nest g module order-product

# Service
nest g service order-product

# Product
npx typeorm migration:create ./src/migration/create-table-order-product
```

</details>


<details><summary>Migration Insert Status</summary>

```bash
# Migration Insert Status
npx typeorm migration:create ./src/migration/insert-status

# Migration Alter Table Payment
npx typeorm migration:create ./src/migration/alter-table-payment
```

</details>

<details><summary>Test</summary>

```bash
# Teste do service de pagamento
npm run test src/payment/__test__/payment.service.spec.ts

# Teste do controller de pedidos
npm run test src/order/__test__/order.controller.spec.ts 

# Teste do service de pedidos
npm run test src/order/__test__/order.service.spec.ts

# Teste do service de encomenda do produto
npm run test src/order-product/__test__/order-product.service.spec.ts

```

</details>
