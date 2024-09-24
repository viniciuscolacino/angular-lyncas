import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet
  ],
  template: `
    <app-header />
    <router-outlet />
    <app-footer />
  `,
  host: { 'class': 'd-flex flex-column h-100' }
})

export class AppComponent implements OnInit {
  title = 'lyncas';

  constructor(
    private readonly iconRegistry: MatIconRegistry
  ) {
  }

  ngOnInit(): void {
    this.iconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }
}
