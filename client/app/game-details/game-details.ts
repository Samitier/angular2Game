import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import {  ActivatedRoute } from '@angular/router';
import { AppHttpService } from '../services/app-http-service';




@Component({
	template: `
        <section class="container">
            <header>
                <h1>{{ game?.title }}</h1>
            </header>
            <main class='row'>
                {{ game?.description }}
            </main>
        </section>
    ` 
})

export class GameDetail implements OnInit {

	game: Game
    gameId: Number

	constructor(private _appHttpService: AppHttpService, private _route: ActivatedRoute) {

	}

    ngOnInit() {
        this._route
            .params
            .subscribe(params => {
                this.gameId = params['id']
                this._appHttpService
                    .get('https://angular2-gameboy.herokuapp.com/api/games/' + this.gameId)
                    .then(data => this.game = data)
        })
    }
}
