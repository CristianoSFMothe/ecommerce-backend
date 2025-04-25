import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API E-commerce')
    .setDescription(
      `
      API de gerenciamento de um e-commerce, onde você pode realizar operações
      como cadastro de produtos, gerenciamento de usuários, pedidos e pagamentos.
      Para mais informações, entre em contato ou visite o portfólio.
    `,
    )
    .setVersion('1.0')
    .addTag('API')

    .setContact(
      'Cristiano Ferreira Mothe',
      'https://portfolio-qa-cristiano.vercel.app/',
      'cristianodevsysten@email.com',
    )
    // .addServer('https://api.seuservico.com', 'Ambiente de produção') // Example of a production server
    // .addServer('http://localhost:3001', 'Ambiente de desenvolvimento') // Local dev server
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
