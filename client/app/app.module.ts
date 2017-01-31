import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { HttpModule }    from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'

import { GameboyComponent } from './gameboy/gameboy.component'
import { GameboyScreenComponent } from './gameboy/components/gameboy-screen.component'
import { GameboyLogicService } from './gameboy/services/gameboy-logic.service'
import { ButtonUpComponent } from './gameboy/components/button-up.component'
import { ScreenItemComponent } from './gameboy/components/screen-item.component'
import { GameListComponent } from './game-list/game-list.component'
import { appRoutes } from './routes'


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    GameboyComponent,
    GameboyScreenComponent,
    GameListComponent
  ],
  providers: [
    GameboyLogicService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }