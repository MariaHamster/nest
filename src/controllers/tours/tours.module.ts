import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ToursController} from "./tours.controller";
import {ToursService} from "../../services/tours/tours.service";
import {Tour, TourSchema} from "../../shemas/tour";
import {PassportModule} from "@nestjs/passport";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constants";
import {JwtStrategyService} from "../../services/Authentication/jwt-strategy/jwt-strategy.service";


@Module({
    imports: [MongooseModule.forFeature([{name: Tour.name, schema: TourSchema}]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret
        }),
    ],
    controllers: [ToursController],
    providers: [ToursService, JwtStrategyService],
})
export class ToursModule {}