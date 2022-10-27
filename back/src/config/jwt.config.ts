import {ConfigService} from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const getJWTConfig = async (
conifgService: ConfigService
):Promise<JwtModuleOptions> => ({
    secret: conifgService.get('JWT_SECRET')
})

//yarn add @nestjs/jwt
