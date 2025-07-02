import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
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
}
