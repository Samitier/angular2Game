import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { HttpModule }    from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'

import { GameboyComponent } from './gameboy/gameboy.component'
import { GameboyScreenComponent } from './gameboy/components/gameboy-screen.component'
import { GameboyLogicService } from './gameboy/services/gameboy-logic.service'
import { GameDetail } from './game-details/game-details';
import { GameListComponent } from './game-list/game-list.component'
import { appRoutes } from './routes'
import { AppHttpService } from './services/app-http-service';


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
    GameListComponent,
    GameDetail
  ],
  providers: [
    GameboyLogicService,
    AppHttpService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }