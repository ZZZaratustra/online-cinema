import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class AuthService {
    constructor( //nest g module user
        @InjectModel(UserModel) private readonly Usermodel: ModelType<UserModel>
    ){}


async register (dto: any) {
    return this.
}

}
