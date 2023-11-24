import { Module } from '@nestjs/common';
import { CustomConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['environments/.env'],
      load: [configuration],
    }),
  ],
  providers: [CustomConfigService, ConfigService],
  exports: [CustomConfigService, ConfigService],
})
export class CustomConfigModule {}
