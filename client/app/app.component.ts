import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-app',
  template: `
    <gameboy></gameboy>
    <div class="site-background"></div>
  `
})
export class AppComponent implements OnInit { 
  
  constructor(
   
  ) { }

  ngOnInit() {
  }
}