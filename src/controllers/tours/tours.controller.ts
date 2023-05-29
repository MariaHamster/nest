import {Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {ToursService} from "../../services/tours/tours.service";
import {Tour} from "../../shemas/tour";
import {Order} from "../../shemas/order";

@Controller('tours')
export class ToursController {

    constructor(private tourService: ToursService) {
    }

    // @UseGuards(JwtAuthGuard)
    // @Get()
    // getAllTours(): void {
    //     this.tourService.generateTours();
    // }
    @Get()
    getAllTours(): Promise<Tour[]> {
        return this.tourService.getAllTours();
    }

    @Get(':id')
    getTourById(@Param('id') id: string): Promise<Tour[]> {
        return this.tourService.getTourById(id);
    }

    @Post()
    initTours(): Promise<Tour[]> {
        return this.tourService.generateTours();
        // this.tourService.getAllTours();
    }

    // @Get(':remove')
    // removeAllTours(@Param('remove') remove): void {
    //     this.tourService.deleteTours();
    // }
    @Delete()
    removeAllTours(): void {
        this.tourService.deleteTours();
    }

}
