import {Controller, Post} from '@nestjs/common';
import {ITour} from "../../interfaces/tour";
import {ToursService} from "../../services/tours/tours.service";

@Controller('ticket-item')
export class TicketItemController {
    constructor(private tourService: ToursService) {
    }

    @Post()
    getToursByName(name): Promise<ITour[]> {
        return this.tourService.getToursByName(name);
    }

}
