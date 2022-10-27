import {ConfigService} from '@nestjs/config'
import { TypegooseModuleOptions } from 'nestjs-typegoose'
//yarn add @nestjs/config

export const getMongoDbConfig = async (conifgService: ConfigService):Promise<TypegooseModuleOptions> => ({
    uri: conifgService.get('MONGO_URI')
})

// yarn add @typegoose/typegoose mongoose nestjs-typegoose
// yarn add -D @types/mongoose
