import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../shemas/user";
import {UsersController} from "./users.controller";
import {UsersService} from "../../services/users/users.service";
import {AuthService} from "../../services/auth/auth.service";
import {PassportModule} from "@nestjs/passport";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constants";
import {JwtStrategyService} from "../../services/Authentication/jwt-strategy/jwt-strategy.service";

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret
        }),
    ],
    controllers: [UsersController],
    providers: [UsersService, AuthService, JwtStrategyService],
})
export class UsersModule {}
