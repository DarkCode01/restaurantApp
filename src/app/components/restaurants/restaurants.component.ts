import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  @Input() public items:[]=[];
  public limitCard:number=8;
 

  public valueSearch:string = '';

  constructor() { }

  ngOnInit(): void {
   
  }
  public moreItem():void{
    this.limitCard+=10;
  
  }

}
