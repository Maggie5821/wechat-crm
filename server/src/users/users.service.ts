import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    // 模拟用户数据
    return [
      { id: 1, name: '张三', email: 'zhangsan@example.com' },
      { id: 2, name: '李四', email: 'lisi@example.com' },
    ];
  }
}
