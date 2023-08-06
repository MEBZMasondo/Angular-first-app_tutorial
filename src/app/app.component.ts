import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

// For routing
import { RouterModule } from '@angular/router'; // Import RouterModule


@Component({
  selector: 'app-root',
  standalone: true,

  template: `
  <main>
    <header class="brand-name">
    <a href="/">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </a>
      </header>
    <section class="content">
      <!-- <app-home></app-home> -->
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],

  imports: [
    HomeComponent,  RouterModule,
  ]

})
export class AppComponent {
  title = 'homes';
}
