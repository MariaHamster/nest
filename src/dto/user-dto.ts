import {IUser} from "../interfaces/user";

// создать класс реализующий IUser
export class UserDto implements IUser {
    psw: string;
    cardNumber: string;
    login: string;
    email: string;
    id: string;

}