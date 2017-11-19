import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Injectable()
export class ColorService {

    constructor(){

    }  

    changeColor(string){

        $(".links").css("background", "url('../../../assets/hexagone.png')");
        $("#" + string).css("background", "url('../../../assets/hexagone2.png')");

    }

}