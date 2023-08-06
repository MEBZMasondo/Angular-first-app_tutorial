import { Component } from '@angular/core';
// Inputs allow components to share data. The direction of the data sharing is from parent component to child component.
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

import { RouterModule } from '@angular/router';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  // template: `
  //   <p>
  //     housing-location works!
  //   </p>
  // `,
  // template: `
  // <section class="listing">
  //   <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
  //   <h2 class="listing-heading">{{ housingLocation.name }}</h2>
  //   <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  // </section>
  // `,
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
`,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}
