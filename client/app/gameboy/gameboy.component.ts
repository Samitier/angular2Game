import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'gameboy',
  template: `
    <div class='gameboy'>
        <gameboy-screen></gameboy-screen>
    </div>
  `
})
export class GameboyComponent implements OnInit { 
  
  constructor(
   
  ) { }

  ngOnInit() {
  }
}