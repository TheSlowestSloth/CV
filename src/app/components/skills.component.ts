import { Component } from '@angular/core';
import { SlideService } from '../services/slide.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: '../views/skills.component.html',
  styleUrls: ['../views/styles/skills.component.css', '../views/styles/template.component.css'],
  animations: [SlideService],
  host: { '[@fadeInAnimation]': '' }
})
export class SkillsComponent {

  constructor(){

  }
  
}