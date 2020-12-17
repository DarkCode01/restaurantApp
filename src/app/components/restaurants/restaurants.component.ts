import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  @Input() public items:[]=[];
  public valueSearch:string = '';

  constructor() { }

  ngOnInit(): void {
   
  }

}
