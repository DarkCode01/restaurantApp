import {RouterModule,Routes} from "@angular/router"
import { HomeComponent } from "./pages/home/home.component";


const ROUTES : Routes = [
    {
        path: 'home',
        component: HomeComponent
    }
    // {
    //     path: 'about',
    //     component: 
    // },
    // {
    //     path: 'contact',
    //     component: 
    // },
    // {
    //     path: 'contact',
    //     component: 
    // }
]

export const appRoutes:any = RouterModule.forRoot(ROUTES);