import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectlistService {

  ProjectList = [
    {
       "title" : "  Clinque de skin",
       "category" : "artificial-landscaping", 
       "location" : "Kan Road",
       "img" : [
        "https://www.devsnews.com/template/landco/landco/assets/img/feature/feat2.jpg",
        "https://www.devsnews.com/template/landco/landco/assets/img/feature/feat1.jpg",
        "https://www.devsnews.com/template/landco/landco/assets/img/feature/feat2.jpg",
        "https://www.devsnews.com/template/landco/landco/assets/img/feature/feat1.jpg",
        "https://www.devsnews.com/template/landco/landco/assets/img/feature/feat2.jpg",
        "https://www.devsnews.com/template/landco/landco/assets/img/feature/feat1.jpg"
       ],
       
    },
    {
        "title" : "Panhtwa shopping mall",
       "category" : "artificial-landscaping", 
       "location" : "Taundwingyi city",
        "img" : [
          "https://www.devsnews.com/template/landco/landco/assets/img/feature/feat3.jpg",
          "https://www.devsnews.com/template/landco/landco/assets/img/feature/feat2.jpg"
         ]
     }
]
}