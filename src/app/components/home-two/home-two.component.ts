import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(param : any){
    this.router.navigate(['/' + param])
  }

}
