import { Controller, Post, Body } from '@nestjs/common'; //nest g controller auth
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor (private readonly AuthService: AuthService){}

    @Post('register')
    async register(@Body() dto: any){
            return this.AuthService.register(dto)
    }

}
