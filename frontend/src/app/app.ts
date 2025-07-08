import { Component } from '@angular/core';
import { Landing } from './landing/landing';

import {Hero} from './components/hero/hero'
import {About} from './components/about/about'
import {Contact} from './components/contact/contact'
import {Footer} from './components/footer/footer'
import {Projects} from './components/projects/projects'


@Component({
  selector: 'app-root',
  imports: [
    Hero,
    About,
    Contact,
    Footer,
    Projects
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
