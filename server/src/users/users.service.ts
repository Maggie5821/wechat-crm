import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      email: 'test@example.com',
      name: '测试用户',
      password: '123456',
    },
  ];

  private idCounter = 2;

  create(dto: CreateUserDto) {
    const newUser = { id: this.idCounter++, ...dto };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }
}
