import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StartComponent } from './start/start.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantService } from "../service/restaurant.service";
import { LoadingComponent } from '../components/loading/loading.component';
import { SkeletonComponent } from '../components/skeleton/skeleton.component';
import { RestaurantsComponent } from '../components/restaurants/restaurants.component';



@NgModule({
    imports:[
        CommonModule  
    ],
    declarations:[
        SkeletonComponent,
        RestaurantsComponent,
        LoadingComponent,  
        HomeComponent,
        AboutComponent,
        ContactComponent,
        FeedbackComponent,
        StartComponent,
        RestaurantComponent
    ],
    providers:[
        RestaurantService
    ],
    exports: [
        LoadingComponent,
        RestaurantsComponent,
        SkeletonComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        FeedbackComponent,
        StartComponent,
      
    ]
})
export class PagesModule{

    constructor(){}
    
} 