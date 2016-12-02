import { Component, OnInit } from '@angular/core'
import { GameboyLogicService } from './services/gameboy-logic.service'
import { GameboyAction } from './models/gameboy-actions.model'

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