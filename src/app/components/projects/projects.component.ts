import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from '../elements/DTO/projectlists.dto';
import { ProjectlistService } from '../elements/projectlist.service';
import { ProjectList } from '../elements/projectlists';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects : any;
  firstImage;

  constructor(
    private router : Router,
    private projectlist_ : ProjectlistService
  ) { }

  

  ngOnInit(): void {
    this.projects= this.projectlist_.ProjectList
    //this.firstImage = this.projectlist_.ProjectList.map( x => x.img[0])
    //console.log(this.firstImage, 'tat')
  }



}
