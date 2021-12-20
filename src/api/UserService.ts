import axios, { AxiosResponse } from "axios";
import api from ".";
import { IUser } from "../models/IUser";

export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return api.get<IUser[]>('./users.json')
    } 
}