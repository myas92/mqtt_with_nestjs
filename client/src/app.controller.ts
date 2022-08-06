import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('MQTT_SERVICE') private client: ClientProxy,
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('notifications')
   getNotifications(){
      return this.client.send('notification_channel', "It's a Message From Client")
  }
  @Get('process')
  getProcessClientData(){
      return this.client.send('process_channel', "Mohammad Yaser Ahmadi")
  }
}
