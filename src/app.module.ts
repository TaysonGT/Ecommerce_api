import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (configService: ConfigService)=> ({
        type: 'postgres',
        url: configService.get('DB_URL'),
        ssl: true,
        synchronize: true,
        entities: [join(process.cwd(), 'dist/**/*.entity{.js,.ts}')]
      })
    }),
    AuthModule,
  ],
})
export class AppModule {}