import { Routes } from '@angular/router';

import { GameboyComponent } from './gameboy/gameboy.component'
import { GameListComponent } from './game-list/game-list.component'
import { GameDetail } from './game-details/game-details';

export const appRoutes:Routes = [
    { path: 'games', component: GameListComponent },
    { path: 'game/:id', component: GameDetail },
    { path: 'gameboy', component: GameboyComponent },
    { path: '**', redirectTo: '/games', pathMatch: 'full' },
]
