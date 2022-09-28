
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('src/app/modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '', loadChildren: () => import('src/app/modules/login/login.module').then(m => m.LoginModule)
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
