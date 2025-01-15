import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'goldpoint_v1';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'google-site-verification=CN-E46tNzah_a14IBfv2o5Zcscu9KiPpBwYw9QgVTOA', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
