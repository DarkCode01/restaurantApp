import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public items:any[] = [];


  constructor(private ServiceRestaurant:RestaurantService) {}

  ngOnInit(): void {

    this.items=this.ServiceRestaurant.allRestaurant;
    // console.log(this.items)
  }

}
