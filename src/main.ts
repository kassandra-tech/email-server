
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

require('dotenv').config();

const { Port } = process.env;

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    const options = new DocumentBuilder()
      .setTitle('Kassandra email server')
      .setDescription('Send emails')
      .setVersion('0.0.1')
      .addTag('email')
      .build();
    const document = SwaggerModule.createDocument(app, options);
  
    SwaggerModule.setup('api', app, document);
  
    await app.listen(process.env.PORT);
  
    console.log(`App is running on: ${await app.getUrl()}`);
  }
  bootstrap();
  