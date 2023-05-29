import {Body, Controller, Get, Post} from '@nestjs/common';
import {OrderService} from "../../services/order/order.service";
import {OrderDto} from "../../dto/order-dto";
import {Order, OrderDocument} from "../../shemas/order";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Controller('order')
export class OrderController {

    constructor(private  orderService: OrderService,
                @InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

    @Get()
    getAllOrders(): Promise<Order[]> {
        return this.orderService.getAllOrders();
    }

    @Post()
    initTours(@Body() data: OrderDto): void {
        const orderData = new OrderDto(data.age, data.birthDay, data.cardNumber, data.tourId, data.userId);
        this.orderService.sendOrder(orderData);
    }

}
