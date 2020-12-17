import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public isLoading:boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public home():void{
    this.isLoading=true;
    timer(1200).subscribe(
      ()=> this.router.navigate(['/home'])
    )
  }

}
