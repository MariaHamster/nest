import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Tour, TourDocument} from "../../shemas/tour";
import {Model} from "mongoose";
import {TourDto} from "../../dto/tour-dto";
import {ITour, ITourClient} from "../../interfaces/tour";


@Injectable()
export class ToursService {
    private toursCount = 10;

    constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {
    }

    async getAllTours(): Promise<Tour[]> {
        return this.tourModel.find();
    }

    async generateTours(): Promise<ITour[]> {
        for (let i = 0; i <= this.toursCount; i++) {
            const tour = new TourDto('test'+i,'test desc','test operator', '300'+i, '+');
            const tourData = new this.tourModel(tour);
            await tourData.save();
        }
        return this.getAllTours();
    }

    async deleteTours(): Promise<any> {
        return this.tourModel.deleteMany({})
    }

    getTourById(id: string): Promise<Tour[]> {
        return this.tourModel.find({"_id" : id});
    }

    async uploadTour(body: ITourClient) {
        const tour = new TourDto(body.name, body.description, body.tourOperator, body.price, body.img);
        const tourData = new this.tourModel(tour);
        await tourData.save();
    }

    async getToursByName(name): Promise<ITour[]> {
        return this.tourModel.find({name: { "$regex": name, "$options": "i" }})

    }

}
