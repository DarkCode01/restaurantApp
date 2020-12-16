import {RouterModule,Routes} from "@angular/router"
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";
import { HomeComponent } from "./pages/home/home.component";
import { RestaurantComponent } from "./pages/restaurant/restaurant.component";
import { StartComponent } from "./pages/start/start.component";


const ROUTES : Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'home/:id',
        component: RestaurantComponent
    },

    {
        path: 'about',
        component:AboutComponent 
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'report',
        component: FeedbackComponent
    },
    {
        path: '',
        component: StartComponent
    },
    {
        path: '**',
        component: StartComponent
    },
 
]

export const appRoutes:any = RouterModule.forRoot(ROUTES);