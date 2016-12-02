import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject'
import { GameboyAction } from '../models/gameboy-actions.model'

@Injectable()
export class GameboyLogicService {

    private _actionAnnounceSubject = new Subject<Object>()
    actionAnnounced$ = this._actionAnnounceSubject.asObservable();

    announceNewAction(action: GameboyAction) {
        this._actionAnnounceSubject.next(action);
    }
}