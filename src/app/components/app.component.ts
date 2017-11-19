import {Router} from '@angular/router';
import * as $ from 'jquery';
import { Component } from '@angular/core';
import { SlideService } from '../services/slide.service';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'app-root',
  templateUrl: '../views/app.component.html',
  styleUrls: ['../views/styles/app.component.css', '../views/styles/template.component.css']
})
export class AppComponent {

  public currentLink: string = "home";

  constructor(private router: Router){

    if(this.router.url !== "/" + this.currentLink){
      this.router.navigateByUrl("/" + this.currentLink);
    };

  }

  changeColor(string){

    $(".links").css("background-image", "url('../../../assets/hexagone.png')");
    $("#" + string).css("background-image", "url('../../../assets/hexagone2.png')");

    this.currentLink = string;
  }
  
}
