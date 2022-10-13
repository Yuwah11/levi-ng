import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from '../elements/DTO/projectlists.dto';
import { ProjectlistService } from '../elements/projectlist.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  name;
  project;
  image;
  category;
  popupShow : boolean = false
  paramID : string

  constructor(
    private activatedRoute : ActivatedRoute,
    private projectlist_ : ProjectlistService
  ) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.paramMap.get('name')
    this.category = this.activatedRoute.snapshot.paramMap.get('category')
    this.project = this.projectlist_.ProjectList.find(x => x.title == this.name)
this.image = this.project.img
  }

  showPopup(id : string){
    this.popupShow  = true
    this.paramID = id
  }

}
