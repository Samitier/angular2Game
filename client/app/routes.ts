import { Routes } from '@angular/router';

import { GameboyComponent } from './gameboy/gameboy.component'
import { GameListComponent } from './game-list/game-list.component'

export const appRoutes:Routes = [
    { path: '', component: GameListComponent },
    { path: 'gameboy', component: GameboyComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
]
