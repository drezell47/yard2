import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { SetsComponent } from './sets/sets.component';
import { OptionsComponent } from './options/options.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
	{ path: 'sets', component: SetsComponent },
	{ path: 'options', component: OptionsComponent },
	{ path: 'result', component: ResultComponent },
	{ path: '**', redirectTo: 'sets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
