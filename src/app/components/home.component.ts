import {SlideService} from '../services/slide.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: '../views/home.component.html',
  styleUrls: ['../views/styles/home.component.css', '../views/styles/template.component.css'],
  animations: [SlideService],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent {

    constructor(private route: ActivatedRoute){
        
    }
  
}