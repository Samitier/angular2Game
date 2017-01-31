import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-app',
  template: `
    <router-outlet></router-outlet>
    <div class="site-background"></div>
  `
})
export class AppComponent implements OnInit { 
  
  constructor(
   
  ) { }

  ngOnInit() {
  }
}