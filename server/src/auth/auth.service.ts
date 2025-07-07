import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  private mockUser = {
    email: 'test@example.com',
    passwordHash: bcrypt.hashSync('123456', 10),
  };

  async validateUser(email: string, password: string) {
    if (email !== this.mockUser.email) {
      throw new UnauthorizedException('Email not found');
    }

    const isMatch = await bcrypt.compare(password, this.mockUser.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Wrong password');
    }

    return { message: 'Login success', token: 'mock-token' };
  }

  async login(body: { email: string; password: string }) {
    const user = await this.validateUser(body.email, body.password);
    const payload = { email: body.email };  // token 中存储的信息
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
