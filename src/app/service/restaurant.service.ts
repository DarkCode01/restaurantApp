import {Injectable} from "@angular/core";
import { DATA } from "../api/api.data";


@Injectable()
export class RestaurantService{
    public allRestaurant: any[] = [];

    constructor(){
        console.log("service run!!")
        this.chargeRestaurant();
         
    }

    public chargeRestaurant() {
        DATA.subscribe((resp)=>{
            this.allRestaurant.push(resp);
        })
    }
 

}