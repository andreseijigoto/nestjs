import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.APP_JWT_SECRET || 'default-secret-key',
      signOptions: {
        expiresIn: parseInt(process.env.APP_JWT_EXPIRES || '3600')
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthService, AuthGuard]
})
export class AuthModule {}
