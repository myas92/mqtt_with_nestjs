import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttModule } from './mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
