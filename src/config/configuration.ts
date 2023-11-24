import { ConfigService, registerAs } from '@nestjs/config';

const configService = new ConfigService();
const token = 'allConfigs';

export default registerAs(token, () => ({
  db_host: configService.get<string>('POSTGRES_HOST'),
  db_port: configService.get<number>('POSTGRES_PORT'),
  db_username: configService.get<string>('POSTGRES_USERNAME'),
  db_password: configService.get<string>('POSTGRES_PASSWORD'),
  db_database: configService.get<string>('POSTGRES_DB'),
  db_word_secret: configService.get<string>('SECRET_WORD'),
  db_access_secret: configService.get<string>('SECRET_ACCESS'),
  db_refresh_secret: configService.get<string>('SECRET_REFRESH'),
}));
