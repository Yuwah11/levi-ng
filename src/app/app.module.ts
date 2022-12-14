import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { HeaderComponent } from './components/elements/header/header.component';
import { ServiceComponent } from './components/service/service.component';
import { InnerBannerComponent } from './components/elements/inner-banner/inner-banner.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { SliderPopupComponent } from './components/slider-popup/slider-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HeaderComponent,
    ServiceComponent,
    InnerBannerComponent,
    FooterComponent,
    ContactusComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    SliderPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
