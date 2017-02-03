import { Component, OnInit } from '@angular/core'
import { Game } from '../models/game';
import { AppHttpService } from '../services/app-http-service';


@Component({
	selector: 'game-list',
	template: `
    <section class="container">
    	<header>
        	<h1>{{pageTitle}}</h1>
      	</header>
      	<main class='row' *ngIf='games.length'>
			<article class="col-lg-3" *ngFor='let game of games'>
				<a class="card" [routerLink]="['/game', game.id]">
					<img src= "../public/img/games/{{game.image}}" class="card-img-top fullwidth"  />
					<div class="card-block">
						<h3 class="card-title"> 
							{{ game.title }}
						</h3>
						<p class="card-text">
							<strong>Year: </strong>{{game.year}}<br>
							<strong>Developer: </strong>{{game.developer}}
						</p>
					</div>
				</a>
			</article>
      	</main>
    </section>
  `
})

export class GameListComponent implements OnInit {

	pageTitle: string = 'List Of Games';

	games: Game[] = []
	constructor(private _appHttpService: AppHttpService) {

	}

	ngOnInit() {
		this._appHttpService
			.get('https://angular2-gameboy.herokuapp.com/api/games')
			.then(data => this.games = data)
	}
}
