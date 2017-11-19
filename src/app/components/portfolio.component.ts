import { Component } from '@angular/core';
import { SlideService } from '../services/slide.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio',
  templateUrl: '../views/portfolio.component.html',
  styleUrls: ['../views/styles/portfolio.component.css', '../views/styles/template.component.css'],
  animations: [SlideService],
  host: { '[@fadeInAnimation]': '' }
})
export class PortfolioComponent {

  constructor(){
    
  }
  
}