import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ApiService } from './service/api.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent, resolve: {
    data: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(ApiService).getFilmByName('girl')
    }
  } },
  { path: 'home/:query', component: HomeComponent, resolve: {
    data: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(ApiService).getFilmByName(route.paramMap.get('query')!)
    }
  } },
  { path: 'detail/:id', component: DetailComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
