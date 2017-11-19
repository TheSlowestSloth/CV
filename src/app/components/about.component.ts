import { Component } from '@angular/core';
import * as $ from 'jquery';
import { SlideService } from '../services/slide.service';

@Component({
  selector: 'app-about',
  templateUrl: '../views/about.component.html',
  styleUrls: ['../views/styles/about.component.css', '../views/styles/template.component.css'],
  animations: [SlideService],
  host: { '[@fadeInAnimation]': '' }
})
export class AboutComponent {

  constructor(){

  }
  
}