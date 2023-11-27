import { Module } from '@nestjs/common';
import { UserModule } from './modules/UserModule/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from './config/typeorm.config';
import { AuthModule } from './modules/AuthModule/auth.module';
import { CloudinaryModule } from './modules/Cloudinary/cloudinary.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({ useFactory: typeormConfig }),
    CloudinaryModule,
    UserModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
