import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.MQTT,
    options: {
      // url: 'mqtt://broker.emqx.io:1883',
      url: 'mqtt://localhost:1883',
    },
  });
  app.listen();
}
bootstrap();