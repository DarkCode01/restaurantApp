import {Injectable} from "@angular/core";
import { DATA } from "../api/api.data";
import {delay} from 'rxjs/operators'
import { timer } from "rxjs";

@Injectable()
export class RestaurantService{
    public allRestaurant: any[] = [];

    constructor(){
        console.log("service run!!")
        this.chargeRestaurant();
         
    }

    public chargeRestaurant() {
        
        DATA.pipe(delay(2000)).subscribe((resp)=>{
            this.allRestaurant.push(resp);
        })
       
    }
 

}