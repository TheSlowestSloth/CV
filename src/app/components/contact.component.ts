import { Component } from '@angular/core';
import { SlideService } from '../services/slide.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: '../views/contact.component.html',
  styleUrls: ['../views/styles/contact.component.css', '../views/styles/template.component.css'],
  animations: [SlideService],
  host: { '[@fadeInAnimation]': '' }
})
export class ContactComponent {

  constructor(){
    
  }
  
}