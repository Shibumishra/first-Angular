import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h2 class="coustom">
      country-list works!
    </h2>
  `,
  styles: [
    `.coustom{color: blue}`
  ]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
