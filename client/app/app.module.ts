import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { HttpModule }    from '@angular/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'

import { GameboyComponent } from './gameboy/gameboy.component'
import { GameboyScreenComponent } from './gameboy/components/gameboy-screen.component'


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    GameboyComponent,
    GameboyScreenComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }