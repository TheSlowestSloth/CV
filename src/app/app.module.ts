import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { SkillsComponent } from './components/skills.component';
import { PortfolioComponent } from './components/portfolio.component';
import { SlideService } from './services/slide.service';
import { ColorService } from './services/color.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
