import {
  Controller,
  Get,
  Post,
  Body,
  UnauthorizedException
} from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get()
  async login() {
    return 'teste login'
  }

  @Post('signin')
  async signin(@Body() body) {
    if (body.username === '32303944880' && body.password === 'teste123') {
      const id = 1
      const token = await this.service.createToken(id)
      return { auth: true, token: token }
    }

    throw new UnauthorizedException()
  }
}
