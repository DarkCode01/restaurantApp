import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  @Input() public items:[]=[];
  public limitCard:number=8;
 

  public valueSearch:string = '';

  constructor(public router:Router) { }

  ngOnInit(): void {
   
  }
  public moreItem():void{
    this.limitCard+=10;
  
  }
  public open(id:string){
    this.router.navigate([`/home/${id}`])
  }
}
