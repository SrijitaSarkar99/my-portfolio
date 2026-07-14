import { Component } from '@angular/core';
import { About } from '../../sections/about/about';
import { Experience } from '../../sections/experience/experience';
import { Education } from '../../sections/education/education';
import { Projects } from '../../sections/projects/projects';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    About,
    Experience,
    Education,
    Projects,
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
