import { Module } from '@nestjs/common';
import { MqttController } from './mqtt.controller';

@Module({
  controllers: [MqttController]
})
export class MqttModule {}
