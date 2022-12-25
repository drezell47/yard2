import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { ExpansionsComponent } from './expansions/expansions.component';
import { OptionsComponent } from './options/options.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
	{ path: 'expansions', component: ExpansionsComponent },
	{ path: 'options', component: OptionsComponent },
	{ path: 'result', component: ResultComponent },
	{ path: '**', redirectTo: 'expansions' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
