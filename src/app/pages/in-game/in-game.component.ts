import { Component } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivateGuard } from 'src/app/services/guards/deactivate-guard.service';

@Component({
  selector: 'app-in-game',
  templateUrl: 'in-game.component.html',
  styleUrls: ['in-game.component.css'],
})
export class InGameComponent implements IDeactivateGuard {
  canExit: () =>
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> = () => {
    if (
      confirm(
        'Are you sure, You want to exit the Game, Game data will be deleted ?'
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
}
