import { Controller } from '@nestjs/common';
import {MessagePattern, Payload } from '@nestjs/microservices';

@Controller('math')
export class MqttController {
    @MessagePattern('notification_channel')
    getNotifications(@Payload() data) {
        console.log(data);
        return `I Got Message From Client: ${data}`
    }
}