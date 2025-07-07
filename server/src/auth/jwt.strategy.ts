import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'yourSecretKey', // 推荐后期使用 process.env.JWT_SECRET
    });
  }

  async validate(payload: any) {
    // payload 是 sign 的内容，如 { email: 'xx' }
    return { email: payload.email };
  }
}
