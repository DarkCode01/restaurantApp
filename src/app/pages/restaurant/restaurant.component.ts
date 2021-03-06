import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router'
import { timer } from 'rxjs';
import { RestaurantService } from 'src/app/service/restaurant.service';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  
  public item:{};
  
  constructor(
    private service:RestaurantService,
    private router:Router,private param:ActivatedRoute) { 
    
    this.extractParam();

  }
  ngOnInit():void{
    
    if(!this.item){
      this.ifReloadNavigator();
    }

  }

  private ifReloadNavigator(){
    this.service.chargeRestaurant();
    timer(2050).subscribe(()=>{
      this.item=this.service.allRestaurant;
      this.extractParam();
    })

  }

  private extractParam():void{
    this.param.params.subscribe((param_)=>{
     
      if(!param_.id || param_.id==null || (param_.id.substring(param_.id.length -1) == 'r')==false || param_.id == 'undefined' || param_.id.length<2) this.router.navigate(['/home'])
      else  this.service.allRestaurant.forEach((value)=>{
          value.id == param_.id ? this.item=value : null
      })


    
    
    })
  }

  public back() :void{
    this.router.navigate(['/home'])
  }
 
}
