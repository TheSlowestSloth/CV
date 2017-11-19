import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, animate, transition, style } from '@angular/animations';
import * as $ from 'jquery';

export const SlideService =

trigger('fadeInAnimation', [

    transition(':enter', [

        style({ opacity: 0 }),

        animate('0.5s', style({ opacity: 1 }))
    ]),

    transition(':leave', [

        style({ opacity: 1 }),

        animate('0.5s', style({ opacity: 0 }))
    ]),
]);