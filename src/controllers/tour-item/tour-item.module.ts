import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ToursService} from "../../services/tours/tours.service";
import {Tour, TourSchema} from "../../shemas/tour";
import {TourItemController} from "./tour-item.controller";


@Module({
    imports: [MongooseModule.forFeature([{name: Tour.name, schema: TourSchema}])],
    controllers: [TourItemController],
    providers: [ToursService],
})
export class TourItemModule {}