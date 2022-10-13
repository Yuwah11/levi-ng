import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-slider-popup',
  templateUrl: './slider-popup.component.html',
  styleUrls: ['./slider-popup.component.scss']
})
export class SliderPopupComponent implements OnInit {

  @Input() property_image_ : any ;
  @Input() selected : any;
  @ViewChild('owlCar', { static: false }) owlCar: OwlCarousel;
  newproperty : any ;

  constructor(
    private imageSlider : ProjectDetailComponent
  ) { }

  ngOnInit(): void {

    this.newproperty = this.property_image_
    //this.slideby()
  }

  closePopup(){
    this.imageSlider.popupShow = false
  }

  // customOptions: OwlOp = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: false,
  //   autoplay: false,
  //   navSpeed: 700,
  //   animateIn : 'fadeIn',
  //   //navText: ['Previous', 'Next'],
  //   //navText : ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  //   navText: [
  //     '<i class="fa fa-angle-left" aria-hidden="true"></i>',
  //     '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  // ],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 1
  //     },
  //     740: {
  //       items: 1
  //     },
  //     940: {
  //       items: 1
  //     }
  //   },
  //   nav: true
  // }

}
