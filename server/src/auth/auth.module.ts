import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [
    JwtModule.register({
      secret: 'yourSecretKey', // 秘钥，生产环境建议用 env 变量
      signOptions: { expiresIn: '1h' }, // token 有效时长
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
