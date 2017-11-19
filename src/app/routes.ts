import {Routes} from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { PortfolioComponent } from './components/portfolio.component';
import { SkillsComponent } from './components/skills.component';
import { ContactComponent } from './components/contact.component';



export const appRoutes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
]