import {
  Body,
  Controller,
  Request,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Post('login')
  // login(@Body() body: { email: string; password: string }) {
  //   return this.authService.validateUser(body.email, body.password);
  // }

  @Post('login')
  async login(@Body() body) {
    return this.authService.login(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return { user: req.user }; // req.user 是 validate() 返回的
  }
}
