import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OidcDisplayComponent} from "./oidc-display/oidc-display.component";
import {AuthGuard} from "./auth/auth.guard";


const routes: Routes = [
  { path: 'oidc', component: OidcDisplayComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'oidc' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
