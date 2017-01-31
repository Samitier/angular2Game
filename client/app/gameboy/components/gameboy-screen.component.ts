import { Component, OnInit } from '@angular/core'
import { Subscription } from "rxjs/Rx"

import { GameboyLogicService } from '../services/gameboy-logic.service'

@Component({
	selector: 'gameboy-screen',
	template: `
    <div class="gameboy-screen"></div>
  `
})
export class GameboyScreenComponent implements OnInit {

	subscription: Subscription

	constructor(
		private _gameboyLogicService: GameboyLogicService
	) { }

	ngOnInit() {
		this.subscription = this._gameboyLogicService.actionAnnounced$
			.subscribe(action => {
				console.log(action)
			}
		)
	}
}