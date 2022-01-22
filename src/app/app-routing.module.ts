import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InGameComponent } from './pages/in-game/in-game.component';
import { StartGameComponent } from './pages/start-game/start-game.component';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';

const routes: Route[] = [
  {
    path: '',
    component: StartGameComponent,
  },
  {
    path: 'game',
    component: InGameComponent,
    canDeactivate: [DeactivateGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
